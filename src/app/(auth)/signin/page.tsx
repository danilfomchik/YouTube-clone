'use client';

import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Grid2, Typography} from '@mui/material';

import {defaultValues, validation} from './form';
import Button from '../../components/Buttons';
import InputControl from '@/app/components/form/InputControl';

const SignIn = () => {
    const methods = useForm({
        resolver: yupResolver(validation),
        defaultValues,
        mode: 'onChange',
    });

    const {control, handleSubmit} = methods;

    const onSubmit = () => {};

    return (
        <Grid2 container alignItems="center" p={2}>
            <Grid2 container size={10} spacing={2} px={2} alignItems="center">
                <Grid2 size={12}>
                    <Typography variant="h2">{'profile'}</Typography>
                </Grid2>
                <Grid2 size={12}>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid2 container spacing={2}>
                                <Grid2 size={12}>
                                    <Grid2 container justifyContent="space-between" alignItems="center">
                                        <Grid2 size={8}>
                                            <InputControl
                                                control={control}
                                                label={'newName'}
                                                name="newName"
                                                fullWidth
                                            />
                                        </Grid2>
                                        <Grid2 size={3}>
                                            <Button type="submit" color="primary">
                                                {'save'}
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </form>
                    </FormProvider>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default SignIn;
