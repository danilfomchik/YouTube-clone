import React from 'react';
import {Grid, Typography} from '@mui/material';
import Link from 'next/link';

import Button from '@/app/components/Button';

const Main = () => {
    return (
        <Grid container spacing={2} alignItems="center" className="main-container">
            <Grid item xs={12}>
                <Typography variant="h1">{'Main'}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Link href="/profile">
                    <Button color="primary">{'Go to profile'}</Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link href="/signin">
                    <Button color="secondary">{'Авторизуватися'}</Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link href="/profile">
                    <Button variant="outlined" color="primary">
                        {'Go to profile'}
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link href="/signin">
                    <Button variant="outlined" color="secondary">
                        {'Авторизуватися'}
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Main;
