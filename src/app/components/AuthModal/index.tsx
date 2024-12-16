'use client';

import React, {useEffect, useState} from 'react';
import {Backdrop, Dialog, DialogTitle, Grid2, IconButton} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from 'react-redux';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {selectResetPasswordStatus, selectSignInStatus, selectSignUpStatus} from '@/app/redux/auth/selectors';
import {StatusesTypes} from '@/app/redux/types';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {AuthSearchParamsValues, SearchParamsKeys} from '@/app/services/types';
import ResetPasswordForm from './ResetPasswordForm';

const currentAuthForm = {
    [AuthSearchParamsValues.signInValue]: <SignInForm />,
    [AuthSearchParamsValues.signUpValue]: <SignUpForm />,
    [AuthSearchParamsValues.resetPasswordValue]: <ResetPasswordForm />,
};

const AuthModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const signUpStatus = useSelector(selectSignUpStatus);
    const signInStatus = useSelector(selectSignInStatus);
    const resetPasswordStatus = useSelector(selectResetPasswordStatus);

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
        <Dialog open={isModalOpen} onClose={closeAuthModal} closeAfterTransition={false}>
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
            {[signInStatus, signUpStatus, resetPasswordStatus].includes(StatusesTypes.loading) ? (
                <Backdrop open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : null}
        </Dialog>
    );
};

export default AuthModal;
