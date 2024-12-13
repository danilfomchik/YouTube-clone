import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import AccountMenu from '../AccountMenu';
import LoginButton from '@/app/components/Buttons/LoginButton';
import {IUserProps} from './types';

const User = ({isUserLoggedIn}: IUserProps) => {
    return (
        <>
            {isUserLoggedIn ? (
                <AccountMenu />
            ) : (
                <LoginButton startIcon={<AccountCircleOutlinedIcon color="secondary" />} />
            )}
        </>
    );
};

export default User;
