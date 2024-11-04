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
import {SearchParamsKeys} from '@/app/services/types';
import {AuthSearchParamsValues} from '../../Buttons/LoginButton/types';
import InputPasswordControl from '../../form/InputPasswordControl';
import {validation, defaultValues} from './form';
import {useAppDispatch} from '@/app/redux/store';
import {onUserSignInWithEmailAndPassword} from '@/app/redux/auth/thunks';
import {selectSignInError} from '@/app/redux/auth/selectors';
import {resetError} from '@/app/redux/auth/authSlice';
import {IThunkNames} from '@/app/redux/auth/types';

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const signInError = useSelector(selectSignInError);
    const {addParams, deleteParams} = useChangeParams();

    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit} = methods;

    const onSubmit: SubmitHandler<typeof defaultValues> = data => {
        const {email, password} = data;

        dispatch(onUserSignInWithEmailAndPassword({email, password, deleteParams}));
    };

    const onOpenSignUpForm = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signUpValue]);
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

                {signInError && (
                    <Alert severity="error" variant="outlined">
                        Incorrect email or password
                    </Alert>
                )}

                <FormProvider {...methods}>
                    <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
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
                                    variant="outlined"
                                    name="password"
                                    placeholder="Enter password"
                                />
                            </Grid2>

                            <Grid2 size={{xs: 12, sm: 6}}>
                                <Button fullWidth variant="outlined" color="secondary" type="submit">
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
                        <Button fullWidth variant="contained" color="primary" startIcon={<GoogleIcon />}>
                            Google
                        </Button>
                    </Grid2>

                    <Grid2 py={2} size={{xs: 12, sm: 6}}>
                        <Button fullWidth variant="contained" color="primary" startIcon={<FacebookIcon />}>
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
