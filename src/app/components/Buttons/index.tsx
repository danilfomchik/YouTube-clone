import React from 'react';
import {type ButtonProps, Button as MuiButton} from '@mui/material';

import {CustomButtonProps} from './types';

const Button = <T,>({
    variant = 'contained',
    color = 'primary',
    children,
    minWidth = '0',
    endIcon = null,
    startIcon = null,
    ...rest
}: CustomButtonProps & ButtonProps & T) => {
    return (
        <MuiButton
            variant={variant}
            color={color}
            endIcon={endIcon}
            startIcon={startIcon}
            sx={{
                minWidth,
            }}
            {...rest}>
            {children}
        </MuiButton>
    );
};

export default Button;
