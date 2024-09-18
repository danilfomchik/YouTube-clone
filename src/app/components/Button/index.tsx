import React from 'react';
import {type ButtonProps, Button as MuiButton} from '@mui/material';

import {CustomButtonProps} from './types';

const Index = ({
    variant = 'contained',
    color,
    children,
    minWidth = '0',
    icon = null,
    ...rest
}: CustomButtonProps & ButtonProps) => {
    return (
        <MuiButton
            variant={variant}
            color={color}
            endIcon={icon}
            sx={{
                minWidth,
            }}
            {...rest}>
            {children}
        </MuiButton>
    );
};

export default Index;
