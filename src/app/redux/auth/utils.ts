import {User} from 'firebase/auth';
import {v4 as uuidv4} from 'uuid';

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

export const createNewImageName = (photoURL: File | undefined) => {
    const imageName = uuidv4() + '.' + photoURL?.name?.split('.')?.pop();

    return imageName;
};
