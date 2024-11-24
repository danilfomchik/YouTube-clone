'use client';

import {useEffect} from 'react';
import {
    Alert,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid2,
    Link as MuiLink,
    Typography,
} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector} from 'react-redux';

import Button from '../../Buttons';
import InputControl from '../../form/InputControl';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys, AuthSearchParamsValues} from '@/app/services/types';
import {validation, defaultValues} from './form';
import {useAppDispatch} from '@/app/redux/store';
import {onResetUserPassword} from '@/app/redux/auth/thunks';
import {selectResetPasswordError} from '@/app/redux/auth/selectors';
import {IThunkNames} from '@/app/redux/auth/types';
import {resetError} from '@/app/redux/auth/authSlice';

const ResetPasswordForm = () => {
    const dispatch = useAppDispatch();
    const resetPasswordError = useSelector(selectResetPasswordError);
    const {addParams} = useChangeParams();

    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit} = methods;

    const onSubmit = ({email}: {email: string}) => {
        dispatch(onResetUserPassword({email, addParams}));
    };

    const onOpenSignInForm = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
    };

    useEffect(() => {
        return () => {
            if (resetPasswordError) {
                dispatch(resetError(IThunkNames.resetPassword));
            }
        };
    }, [dispatch, resetPasswordError]);

    return (
        <>
            <DialogContent>
                <DialogContentText component={Grid2} display="flex" flexDirection="column" gap={2}>
                    <Typography variant="body1">
                        Enter your user account&#39;s verified email address and we will send you a password reset link.
                    </Typography>
                </DialogContentText>

                {resetPasswordError && (
                    <Alert severity="error" variant="outlined">
                        Account with this email do not exist.
                    </Alert>
                )}

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container justifyContent="center" flexDirection="column" alignItems="center" size={12}>
                            <Grid2 py={2} size={{xs: 12}}>
                                <InputControl
                                    control={control}
                                    margin="dense"
                                    variant="outlined"
                                    name="email"
                                    placeholder="Enter email"
                                />
                            </Grid2>

                            <Grid2 pt={2} size={{xs: 12, sm: 6}}>
                                <Button fullWidth variant="outlined" color="secondary" type="submit">
                                    Reset
                                </Button>
                            </Grid2>
                        </Grid2>
                    </form>
                </FormProvider>
            </DialogContent>
            <Grid2 container justifyContent="center">
                <DialogActions>
                    <MuiLink component="button" variant="body2" onClick={onOpenSignInForm}>
                        <Typography variant="caption">I already have account</Typography>
                    </MuiLink>
                </DialogActions>
            </Grid2>
        </>
    );
};

export default ResetPasswordForm;
