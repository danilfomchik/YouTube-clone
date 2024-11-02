import React from 'react';
import {Backdrop, Dialog, DialogTitle, Grid2, IconButton, Typography} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from 'react-redux';

import {AuthPopupProps} from './types';
import {AuthSearchParamsValues} from '../Buttons/LoginButton/types';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {selectSignInStatus, selectSignUpStatus} from '@/app/redux/auth/selectors';
import {StatusesTypes} from '@/app/redux/types';

const currentAuthForm = {
    [AuthSearchParamsValues.signInValue]: <SignInForm />,
    [AuthSearchParamsValues.signUpValue]: <SignUpForm />,
};

const AuthPopup = ({authParam, isPopupOpen, toggleAuthPopupOpen}: AuthPopupProps) => {
    const signUpStatus = useSelector(selectSignUpStatus);
    const signInStatus = useSelector(selectSignInStatus);

    return (
        <Dialog open={isPopupOpen} onClose={toggleAuthPopupOpen}>
            {authParam && (
                <>
                    <DialogTitle>
                        <Grid2 container flexWrap="nowrap" justifyContent="space-between" alignItems="center">
                            <Typography variant="h2">Welcome!</Typography>
                            <IconButton color="inherit" onClick={toggleAuthPopupOpen}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Grid2>
                    </DialogTitle>

                    {currentAuthForm[authParam]}
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

export default AuthPopup;
