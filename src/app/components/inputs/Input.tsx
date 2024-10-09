import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import type {TextFieldProps} from '@mui/material';
import {TextField} from '@mui/material';

import {IInputProps} from './types';

const Input = ({
    field,
    label,
    value,
    defaultValue = '',
    onChange,
    type = 'text',
    ...textFieldProps
}: IInputProps & TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const eventValue = e.target.value;

            if (onChange) {
                onChange(e);
            }

            if (field?.onChange) {
                field.onChange(eventValue);
            }

            setCurrentValue(eventValue);
        },
        [field, onChange],
    );

    const initValue = useCallback(() => {
        setCurrentValue(value || field?.value || '');
    }, [value, field]);

    useEffect(() => {
        initValue();
    }, [initValue]);

    return (
        <TextField
            {...field}
            onChange={handleChange}
            variant="standard"
            label={label}
            value={currentValue}
            color="secondary"
            type={type}
            {...textFieldProps}
        />
    );
};

export default Input;
