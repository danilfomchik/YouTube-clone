import {signInWithEmailAndPassword} from 'firebase/auth';

import {signInWithFacebookPopup, signInWithGooglePopup} from './firebase-config';
import {AuthMethods} from '../redux/auth/types';

export const authMethods = {
    [AuthMethods.emailAndPassword]: signInWithEmailAndPassword,
    [AuthMethods.google]: signInWithGooglePopup,
    [AuthMethods.facebook]: signInWithFacebookPopup,
};
