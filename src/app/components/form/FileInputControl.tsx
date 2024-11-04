import React from 'react';
import {type TextFieldProps} from '@mui/material';
import {useController, useFormContext, Control} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash';

import FileInput from '../inputs/FileInput';

export interface IInputProps {
    control: Control<any>;
    name: string;
}

const FileInputControl = ({control, name, label, defaultValue, ...restProps}: IInputProps & TextFieldProps) => {
    const {formState} = useFormContext();

    const {errors} = formState;
    const {field} = useController({
        name,
        control,
        defaultValue,
    });

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors as any} name={name} render={({message}) => message} />,
    };

    return (
        <FileInput field={field} onChange={field.onChange} type="file" label={label} {...restProps} {...errorProps} />
    );
};

export default FileInputControl;
