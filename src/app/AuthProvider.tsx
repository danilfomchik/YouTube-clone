import {useEffect, PropsWithChildren, useCallback} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import Cookies from 'js-cookie';

import {useAppDispatch} from './redux/store';
import {auth} from './firebase-config';
import {resetSlice, setUserData} from './redux/auth/authSlice';
import {StorageKeys} from './services/types';
import {prepareUserData} from './redux/auth/utils';

const AuthProvider = ({children}: PropsWithChildren) => {
    const dispatch = useAppDispatch();

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [initializeUser]);

    return children;
};

export default AuthProvider;
