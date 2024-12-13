import React from 'react';
import {Typography} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {NotAuthorizedProps} from './types';
import LoginButton from '@/app/components/Buttons/LoginButton';

const NotAuthorized = ({isNavbarOpen}: NotAuthorizedProps) => {
    return (
        <>
            {isNavbarOpen && (
                <Typography variant="body2">Log in to rate videos, add comments and subscribe to channels.</Typography>
            )}
            <LoginButton open={isNavbarOpen} startIcon={<AccountCircleOutlinedIcon />} />
        </>
    );
};

export default NotAuthorized;
