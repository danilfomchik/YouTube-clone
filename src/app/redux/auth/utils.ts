import {User} from 'firebase/auth';

import {IUser} from './types';

export const prepareUserData = (userData: User): IUser => {
    const {
        displayName,
        email,
        uid,
        photoURL,
        metadata: {lastSignInTime},
    } = userData;

    return {
        displayName: displayName || '',
        email: email || '',
        lastLogin: lastSignInTime || '',
        uid,
        photoURL: photoURL || '',
    };
};
