'use client';

import React, {useEffect, useState} from 'react';
import {Backdrop, Dialog, DialogTitle, Grid2, IconButton} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from 'react-redux';

import {AuthSearchParamsValues} from '../Buttons/LoginButton/types';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {selectSignInStatus, selectSignUpStatus} from '@/app/redux/auth/selectors';
import {StatusesTypes} from '@/app/redux/types';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys} from '@/app/services/types';

const currentAuthForm = {
    [AuthSearchParamsValues.signInValue]: <SignInForm />,
    [AuthSearchParamsValues.signUpValue]: <SignUpForm />,
};

const AuthModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const signUpStatus = useSelector(selectSignUpStatus);
    const signInStatus = useSelector(selectSignInStatus);

    const {searchParams, deleteParams} = useChangeParams();
    const authParam = searchParams.get(SearchParamsKeys.authKey);

    const closeAuthModal = () => {
        deleteParams(SearchParamsKeys.authKey);
    };

    useEffect(() => {
        if (authParam) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [authParam, setIsModalOpen]);

    return (
        <Dialog open={isModalOpen} onClose={closeAuthModal}>
            {authParam && (
                <>
                    <DialogTitle>
                        <Grid2 container flexWrap="nowrap" justifyContent="flex-end" alignItems="center">
                            <IconButton color="inherit" onClick={closeAuthModal} data-testid="Close button">
                                <CloseRoundedIcon />
                            </IconButton>
                        </Grid2>
                    </DialogTitle>

                    {currentAuthForm[authParam as AuthSearchParamsValues]}
                </>
            )}
            {signUpStatus === StatusesTypes.loading || signInStatus === StatusesTypes.loading ? (
                <Backdrop open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : null}
        </Dialog>
    );
};

export default AuthModal;
