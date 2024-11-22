import {object, string} from 'yup';

export const defaultValues = {
    email: '',
};

export const validation = object().shape({
    email: string().email('Enter correct email').required('Email is required'),
});
