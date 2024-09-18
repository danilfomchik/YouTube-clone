'use client';

import React from 'react';
import {Grid, Typography, Divider, Chip} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Link from 'next/link';

import Button from '../../components/Button';

const SignIn = () => {
    return (
        <>
            <Grid item xs={12} pb={6}>
                <Link href="/" className="exit-form">
                    <Chip
                        icon={<ArrowBackIosNewRoundedIcon />}
                        size="small"
                        variant="outlined"
                        label="Повернутися на головну сторінку"
                    />
                </Link>
            </Grid>

            <Grid item xs={12} xl={11} container justifyContent="center">
                <Grid item xs={12} lg={9} xl={8} container alignItems="center" justifyContent="center">
                    <Grid item pb={3} xs={12} justifyContent="center">
                        <Divider>{'або'}</Divider>
                    </Grid>

                    <Grid item pb={3} xs={12}>
                        <Button
                            type="submit"
                            className="signin__button"
                            fullWidth
                            color="secondary"
                            startIcon={<FacebookIcon />}>
                            {'Авторизуватися через Facebook'}
                        </Button>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center">
                        <Link href="/signup" className="help-link">
                            <Typography variant="body1">{'В мене немає профілю'}</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SignIn;
