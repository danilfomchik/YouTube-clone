import {object, string} from 'yup';

export const defaultValues = {
    newName: '',
};

export const validation = object().shape({
    newName: string().required('New name is required'),
});
