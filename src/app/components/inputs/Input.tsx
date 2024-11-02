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
    type,
    inputRef,
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
                if (type !== 'file') {
                    field.onChange(eventValue);
                    setCurrentValue(eventValue);
                } else {
                    const file = (e.currentTarget as HTMLInputElement).files?.[0];

                    if (file) {
                        field.onChange(file);
                        setCurrentValue(file.name);
                    }
                }
            }
        },
        [field, onChange, type],
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
            value={type !== 'file' ? currentValue : undefined}
            color="secondary"
            type={type}
            inputRef={inputRef}
            {...textFieldProps}
        />
    );
};

export default Input;
