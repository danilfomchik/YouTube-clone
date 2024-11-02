'use client';

import React, {useEffect, useState} from 'react';
import {Typography, ButtonProps} from '@mui/material';

import Button from '..';
import {AuthSearchParamsValues, LoginButtonProps} from './types';
import {StartIconButton} from '../types';
import AuthPopup from '../../AuthPopup';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys} from '@/app/services/types';

const LoginButton = ({open, startIcon, ...restProps}: LoginButtonProps & StartIconButton & ButtonProps) => {
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

    const {searchParams, addParams, deleteParams} = useChangeParams();
    const authParam = searchParams.get(SearchParamsKeys.authKey);

    const toggleAuthPopupOpen = () => {
        if (authParam) {
            deleteParams(SearchParamsKeys.authKey);
        } else {
            addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
        }
    };

    useEffect(() => {
        if (authParam) {
            setIsAuthPopupOpen(true);
        } else {
            setIsAuthPopupOpen(false);
        }
    }, [authParam, setIsAuthPopupOpen]);

    return (
        <>
            <Button
                open={open}
                fullWidth
                variant="outlined"
                color="secondary"
                startIcon={startIcon}
                onClick={toggleAuthPopupOpen}
                {...restProps}>
                <Typography variant="body1">Log in</Typography>
            </Button>
            <AuthPopup
                authParam={authParam as AuthSearchParamsValues}
                isPopupOpen={isAuthPopupOpen}
                toggleAuthPopupOpen={toggleAuthPopupOpen}
            />
        </>
    );
};

export default LoginButton;
