import {useEffect, PropsWithChildren, useCallback} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import Cookies from 'js-cookie';
import {useSelector} from 'react-redux';

import {useAppDispatch} from './redux/store';
import {auth} from './firebase/firebase-config';
import {resetSlice as resetAuthSlice, setLoginAttemptsTime, setUserData, setUserLocation} from './redux/auth/authSlice';
import {StorageKeys} from './services/types';
import {prepareUserData} from './redux/auth/utils';
import {selectLoginAttemptsTime, selectMaxAttemptsCountAchieved} from './redux/auth/selectors';
import {fetchWrap} from './services/common';
import {showError} from './redux/snackbar/snackbarSlice';
import {initialLocation, USER_LOCATION_API_URL} from './services/constants';

const AuthProvider = ({children}: PropsWithChildren) => {
    const dispatch = useAppDispatch();
    const maxAttemptsCountAchieved = useSelector(selectMaxAttemptsCountAchieved);
    const loginAttemptsTime = useSelector(selectLoginAttemptsTime);

    const userId = Cookies.get(StorageKeys.userId);
    const regionCode = Cookies.get(StorageKeys.regionCode);

    const getUserLocation = async () => {
        const {country_code}: {country_code: string} = await fetchWrap({
            request: {
                url: USER_LOCATION_API_URL,
            },
        });

        return country_code;
    };

    const allowUserLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async () => {
                    const country_code = await getUserLocation();

                    dispatch(setUserLocation(country_code));
                },
                () => {
                    dispatch(showError({message: 'Geolocation is disabled.'}));
                },
            );
        } else {
            alert('Geolocation is not supported by this browser');
        }
    }, [dispatch]);

    const initializeUser = useCallback(
        async (user: User | null) => {
            if (user) {
                if (!regionCode) {
                    allowUserLocation();
                }

                if (userId && user.uid === userId) {
                    dispatch(setUserLocation(regionCode || initialLocation));
                    dispatch(setUserData(prepareUserData(user)));
                }
            }
        },
        [allowUserLocation, dispatch, regionCode, userId],
    );

    const onAttemptsTimerEnd = useCallback(() => {
        dispatch(resetAuthSlice());
        Cookies.remove(StorageKeys.loginAttempts);
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);

        return unsubscribe;
    }, [initializeUser]);

    useEffect(() => {
        if (maxAttemptsCountAchieved) {
            const timer = setInterval(() => {
                const nextSecond = loginAttemptsTime - 1;

                dispatch(setLoginAttemptsTime(nextSecond));
            }, 1000);

            if (loginAttemptsTime === 0) {
                clearInterval(timer);
                onAttemptsTimerEnd();
            }

            return () => clearInterval(timer);
        }
    }, [dispatch, onAttemptsTimerEnd, loginAttemptsTime, maxAttemptsCountAchieved]);

    return children;
};

export default AuthProvider;
