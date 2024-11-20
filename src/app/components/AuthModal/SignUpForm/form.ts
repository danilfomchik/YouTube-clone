import {mixed, object, ref, string} from 'yup';

export const defaultValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    photoURL: [],
};

const nameRegexp = /^[a-zA-Z][a-zA-Z\s-]+$/u;
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9 !@#$%^&*)(]{6,255}$/;

export const validation = object().shape({
    firstname: string()
        .required('Enter your first name')
        .min(2, 'First name should be greater than 2 characters')
        .max(45, 'First name should be less than 45 characters')
        .matches(nameRegexp, 'Only Latin letters, spaces and hyphens are allowed'),
    lastname: string()
        .required('Enter your lastname')
        .min(2, 'Last name should be greater than 2 characters')
        .max(45, 'Last name should be less than 45 characters')
        .matches(nameRegexp, 'Only Latin letters, spaces and hyphens are allowed'),
    email: string().email('Enter correct email').required('Email is required'),
    password: string()
        .required('Password is required')
        .matches(
            passwordRegexp,
            'The password must contain Latin letters and numbers and be at least 6 characters long',
        )
        .test('test-firstname-contents', 'Password should not contain first name', (value, {parent}) =>
            parent.firstname.length > 0 ? !value.includes(parent.firstname) : true,
        )
        .test('test-lastname-contents', 'Password should not contain last name', (value, {parent}) =>
            parent.lastname.length > 0 ? !value.includes(parent.lastname) : true,
        )
        .test('test-email-contents', 'Password should not contain email address', (value, {parent}) =>
            parent.email.length > 0 ? !value.includes(parent.email) : true,
        ),
    confirmPassword: string()
        .required('Confirm your password')
        .matches(
            passwordRegexp,
            'The password must contain Latin letters and numbers and be at least 6 characters long',
        )
        .oneOf([ref('password')], 'Passwords do not match'),
    photoURL: mixed(),
});
