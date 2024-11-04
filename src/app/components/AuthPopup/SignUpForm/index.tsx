'use client';

import {
    Avatar,
    Badge,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid2,
    IconButton,
    Link as MuiLink,
    Typography,
} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useSelector} from 'react-redux';

import Button from '../../Buttons';
import InputControl from '../../form/InputControl';
import {useChangeParams} from '@/app/services/hooks/useChangeParams';
import {SearchParamsKeys} from '@/app/services/types';
import {AuthSearchParamsValues} from '../../Buttons/LoginButton/types';
import InputPasswordControl from '../../form/InputPasswordControl';
import {validation, defaultValues} from './form';
import {useAppDispatch} from '@/app/redux/store';
import {onUserSignUpWithEmailAndPassword} from '@/app/redux/auth/thunks';
import {useFirebase} from '@/app/services/hooks/useFirebase';
import {selectSignUpStatus} from '@/app/redux/auth/selectors';
import {StatusesTypes} from '@/app/redux/types';
import {IUserFormData} from '../types';
import FileInputControl from '../../form/FileInputControl';

const SignUpForm = () => {
    const dispatch = useAppDispatch();
    const signUpStatus = useSelector(selectSignUpStatus);

    const {onAddUserToDatabase, onAddImageToStorage} = useFirebase();
    const {addParams} = useChangeParams();

    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onSubmit',
    });

    const {control, handleSubmit, setError, resetField, watch} = methods;

    const photoURL = watch('photoURL');
    const avatarUrl = photoURL?.name ? URL.createObjectURL(photoURL) : '';

    const onSubmit = (data: IUserFormData) => {
        const {firstname, lastname, email, password, photoURL} = data;

        const userData = {
            displayName: `${firstname} ${lastname}`,
            email,
            password,
            photoURL,
        };

        dispatch(
            onUserSignUpWithEmailAndPassword({
                userData,
                addParams,
                onAddUserToDatabase,
                onAddImageToStorage,
                setError,
            }),
        );
    };

    const onOpenSignInForm = () => {
        addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
    };

    return (
        <>
            <Badge
                overlap="circular"
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                badgeContent={
                    avatarUrl && signUpStatus !== StatusesTypes.loading ? (
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                resetField('photoURL');
                            }}>
                            <CloseRoundedIcon />
                        </IconButton>
                    ) : null
                }>
                <Avatar alt={'alt'} src={avatarUrl} sx={{width: '100px', height: '100px'}} />
            </Badge>
            <DialogContent>
                <DialogContentText component={Grid2} display="flex" flexDirection="column" gap={2}>
                    <Typography variant="h2">Welcome!</Typography>
                    <Typography variant="body1">
                        Sign up to rate videos, add comments and subscribe to channels.
                    </Typography>
                </DialogContentText>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid2 container justifyContent="center" flexDirection="column" alignItems="center" size={12}>
                            <Grid2 container columnSpacing={2} size={12}>
                                <Grid2 py={2} size={{xs: 12, sm: 6}}>
                                    <InputControl
                                        control={control}
                                        margin="dense"
                                        variant="outlined"
                                        name="firstname"
                                        type="text"
                                        placeholder="Enter firstname"
                                    />
                                </Grid2>

                                <Grid2 py={2} size={{xs: 12, sm: 6}}>
                                    <InputControl
                                        control={control}
                                        margin="dense"
                                        variant="outlined"
                                        name="lastname"
                                        placeholder="Enter lastname"
                                    />
                                </Grid2>
                            </Grid2>

                            <Grid2 py={2} size={{xs: 12}}>
                                <InputControl
                                    control={control}
                                    margin="dense"
                                    variant="outlined"
                                    name="email"
                                    placeholder="Enter email"
                                />
                            </Grid2>

                            <Grid2 container columnSpacing={2} size={12}>
                                <Grid2 py={2} size={{xs: 12, sm: 6}}>
                                    <InputPasswordControl
                                        control={control}
                                        margin="dense"
                                        variant="outlined"
                                        name="password"
                                        placeholder="Enter password"
                                    />
                                </Grid2>

                                <Grid2 py={2} size={{xs: 12, sm: 6}}>
                                    <InputPasswordControl
                                        control={control}
                                        margin="dense"
                                        variant="outlined"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                    />
                                </Grid2>
                            </Grid2>

                            <Grid2 py={2} size={{xs: 12}}>
                                <FileInputControl control={control} margin="dense" variant="outlined" name="photoURL" />
                            </Grid2>

                            <Grid2 pt={2} size={{xs: 12, sm: 6}}>
                                <Button fullWidth variant="outlined" color="secondary" type="submit">
                                    Register
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

export default SignUpForm;
