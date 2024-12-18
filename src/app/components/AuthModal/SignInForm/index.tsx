import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
    Alert,
    DialogActions,
    DialogContent,
    DialogContentText,
    Divider,
    Grid2,
    Link as MuiLink,
    Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import Button from '../../Buttons';
import InputControl from '../../form/InputControl';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys, AuthSearchParamsValues} from '@/app/services/types';
import InputPasswordControl from '../../form/InputPasswordControl';
import {validation, defaultValues} from './form';
import {useAppDispatch} from '@/app/redux/store';
import {onUserSignIn} from '@/app/redux/auth/thunks';
import {selectLoginAttemptsCount, selectMaxAttemptsCountAchieved, selectSignInError} from '@/app/redux/auth/selectors';
import {resetError} from '@/app/redux/auth/authSlice';
import {AuthMethods, IThunkNames, TLoginPayload, UserSignInProps} from '@/app/redux/auth/types';
import {maxLoginAttempts} from '@/app/services/constants';
import SignInAttempts from './SignInAttempts';
import {auth} from '@/app/firebase/firebase-config';

const SignInForm = () => {
    const dispatch = useAppDispatch();

    const loginAttemptsCount = useSelector(selectLoginAttemptsCount);
    const signInError = useSelector(selectSignInError);
    const maxAttemptsCountAchieved = useSelector(selectMaxAttemptsCountAchieved);

    const {addParams, deleteParams} = useChangeParams();
    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit} = methods;

    const handleUserLogin = async ({loginMethod, loginPayload}: UserSignInProps) => {
        if (loginMethod === AuthMethods.emailAndPassword) {
            dispatch(
                onUserSignIn({
                    loginMethod: AuthMethods.emailAndPassword,
                    loginPayload,
                    deleteParams,
                }),
            );
        } else {
            dispatch(
                onUserSignIn({
                    loginMethod,
                    deleteParams,
                }),
            );
        }
    };

    const onSubmit: SubmitHandler<typeof defaultValues> = data => {
        const {email, password} = data;
        const loginPayload: TLoginPayload = [auth, email, password];

        handleUserLogin({loginMethod: AuthMethods.emailAndPassword, loginPayload});
    };

    const onOpenSignUpForm = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signUpValue]);
    };

    const onOpenResetPasswordForm = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.resetPasswordValue]);
    };

    useEffect(() => {
        return () => {
            if (signInError) {
                dispatch(resetError(IThunkNames.signIn));
            }
        };
    }, [dispatch, signInError]);

    return (
        <>
            <DialogContent>
                <DialogContentText component={Grid2} display="flex" flexDirection="column" gap={2}>
                    <Typography variant="h2">Welcome!</Typography>
                    <Typography variant="body1">
                        Sign in to rate videos, add comments and subscribe to channels.
                    </Typography>
                </DialogContentText>

                {signInError && !maxAttemptsCountAchieved && (
                    <Alert severity="error" variant="outlined">
                        Incorrect email or password. Attempt {loginAttemptsCount}/{maxLoginAttempts}
                    </Alert>
                )}

                {maxAttemptsCountAchieved && <SignInAttempts />}

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} data-testid="Sign in form">
                        <Grid2 container justifyContent="center" flexDirection="column" alignItems="center" size={12}>
                            <Grid2 pb={2} pt={!signInError ? 3 : 0} size={{xs: 12}}>
                                <InputControl
                                    control={control}
                                    margin="dense"
                                    variant="outlined"
                                    name="email"
                                    type="text"
                                    placeholder="Enter email"
                                />
                            </Grid2>

                            <Grid2 pb={3} size={{xs: 12}}>
                                <InputPasswordControl
                                    control={control}
                                    margin="dense"
                                    name="password"
                                    label={
                                        <Grid2
                                            container
                                            textAlign="center"
                                            justifyContent="flex-end"
                                            alignItems="center">
                                            <MuiLink
                                                component="button"
                                                type="button"
                                                variant="body2"
                                                onClick={onOpenResetPasswordForm}>
                                                <Typography variant="caption">Forgot password</Typography>
                                            </MuiLink>
                                        </Grid2>
                                    }
                                    placeholder="Enter password"
                                />
                            </Grid2>

                            <Grid2 size={{xs: 12, sm: 6}}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                    type="submit"
                                    disabled={maxAttemptsCountAchieved}>
                                    Log In
                                </Button>
                            </Grid2>
                        </Grid2>
                    </form>
                </FormProvider>

                <Grid2 container columnSpacing={2} justifyContent="center" size={12}>
                    <Grid2 py={3} size={{xs: 10}}>
                        <Divider>or</Divider>
                    </Grid2>

                    <Grid2 py={2} size={{xs: 12, sm: 6}}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<GoogleIcon />}
                            disabled={maxAttemptsCountAchieved}
                            onClick={() => handleUserLogin({loginMethod: AuthMethods.google})}>
                            Google
                        </Button>
                    </Grid2>

                    <Grid2 py={2} size={{xs: 12, sm: 6}}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<FacebookIcon />}
                            disabled={maxAttemptsCountAchieved}
                            onClick={() => handleUserLogin({loginMethod: AuthMethods.facebook})}>
                            Facebook
                        </Button>
                    </Grid2>
                </Grid2>
            </DialogContent>
            <DialogActions>
                <Grid2 container flexGrow={1} justifyContent="center">
                    <MuiLink component="button" variant="body2" onClick={onOpenSignUpForm}>
                        <Typography variant="caption">I don`t have account yet</Typography>
                    </MuiLink>
                </Grid2>
            </DialogActions>
        </>
    );
};

export default SignInForm;
