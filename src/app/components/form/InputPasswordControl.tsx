import React, {MouseEvent, useState} from 'react';
import {Control} from 'react-hook-form';
import {TextFieldProps, IconButton, InputAdornment} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputControl from './InputControl';

interface IInputProps {
    control: Control<any>;
    name: string;
    isInt?: boolean;
}

const InputPasswordControl = (props: IInputProps & TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setShowPassword(show => !show);
    };

    return (
        <InputControl
            type={showPassword ? 'text' : 'password'}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            {...props}
        />
    );
};

export default InputPasswordControl;
