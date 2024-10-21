import React from 'react';
import {Typography} from '@mui/material';

import Button from '..';
import {LoginButtonProps} from './types';
import {StartIconButton} from '../types';

const LoginButton = ({open, startIcon}: LoginButtonProps & StartIconButton) => {
    const handleLogIn = () => {
        // eslint-disable-next-line no-console
        console.log('log in process...');
    };

    return (
        <Button open={open} fullWidth variant="outlined" color="secondary" startIcon={startIcon} onClick={handleLogIn}>
            <Typography variant="body1">Log in</Typography>
        </Button>
    );
};

export default LoginButton;
