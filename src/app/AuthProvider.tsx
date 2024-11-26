import {useEffect, PropsWithChildren, useCallback} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import Cookies from 'js-cookie';
import {useSelector} from 'react-redux';

import {useAppDispatch} from './redux/store';
import {auth} from './firebase/firebase-config';
import {resetSlice, setLoginAttemptsTime, setUserData} from './redux/auth/authSlice';
import {StorageKeys} from './services/types';
import {prepareUserData} from './redux/auth/utils';
import {selectLoginAttemptsTime, selectMaxAttemptsCountAchieved} from './redux/auth/selectors';

const AuthProvider = ({children}: PropsWithChildren) => {
    const dispatch = useAppDispatch();
    const maxAttemptsCountAchieved = useSelector(selectMaxAttemptsCountAchieved);
    const loginAttemptsTime = useSelector(selectLoginAttemptsTime);

    const userId = Cookies.get(StorageKeys.userId);

    const initializeUser = useCallback(
        async (user: User | null) => {
            if (user) {
                if (userId && user.uid === JSON.parse(userId)) dispatch(setUserData(prepareUserData(user)));
            } else {
                if (userId) {
                    dispatch(resetSlice());

                    Cookies.remove(StorageKeys.userId);
                }
            }
        },
        [dispatch, userId],
    );

    const onAttemptsTimerEnd = useCallback(() => {
        dispatch(resetSlice());
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
