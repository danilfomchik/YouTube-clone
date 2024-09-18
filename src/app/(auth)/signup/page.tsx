'use client';

import React from 'react';
import {Grid, Typography, Divider, Chip} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Link from 'next/link';

import Button from '../../components/Button';

const SignUp = () => {
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
            <Grid item xs={12}>
                <Typography align="center" pb={6} variant="h2">
                    {'Вітаємо у SNIFF!'}
                </Typography>
            </Grid>

            <Grid item xs={12} container justifyContent="center">
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Grid item xs={12} xl={9} justifyContent="center">
                        <Grid item xs={12} container alignItems="center" justifyContent="center">
                            <Grid item pb={3} xs={12} lg={7}>
                                <Grid item pb={3} xs={12} justifyContent="center">
                                    <Divider>{'або'}</Divider>
                                </Grid>

                                <Grid item pb={3} xs={12} container>
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
                                    <Link href="/signin" className="help-link">
                                        <Typography variant="body1">{'Я вже маю профіль'}</Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUp;
