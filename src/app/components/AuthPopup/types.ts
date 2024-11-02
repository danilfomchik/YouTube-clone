import {AuthSearchParamsValues} from '../Buttons/LoginButton/types';

export interface AuthPopupProps {
    authParam: AuthSearchParamsValues | null;
    isPopupOpen: boolean;
    toggleAuthPopupOpen: () => void;
}

export interface IUserFormData {
    photoURL?: any;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
}
