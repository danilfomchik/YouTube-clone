import React from 'react';
import {Typography} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {NotAuthorizedProps} from './types';
import LoginButton from '@/app/components/Buttons/LoginButton';

const NotAuthorized = ({navbarStatus}: NotAuthorizedProps) => {
    return (
        <>
            {navbarStatus && (
                <Typography variant="body2">Sign in to rate videos, add comments and subscribe to channels.</Typography>
            )}
            <LoginButton open={navbarStatus} startIcon={<AccountCircleOutlinedIcon />} />
        </>
    );
};

export default NotAuthorized;
