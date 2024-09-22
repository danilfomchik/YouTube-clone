import React from 'react';
import {Typography} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {LogInButton} from '@/app/Styles';
import {NotAuthorizedProps} from './types';

const NotAuthorized = ({navbarStatus}: NotAuthorizedProps) => {
    return (
        <>
            {navbarStatus && (
                <Typography variant="body2">Sign in to rate videos, add comments and subscribe to channels.</Typography>
            )}
            <LogInButton
                open={navbarStatus}
                fullWidth
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircleOutlinedIcon />}>
                <Typography variant="body1">Log in</Typography>
            </LogInButton>
        </>
    );
};

export default NotAuthorized;
