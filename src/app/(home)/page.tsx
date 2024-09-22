'use client';

import React from 'react';
import {Grid2, Typography} from '@mui/material';
import Link from 'next/link';

import Button from '@/app/components/Button';

const Main = () => {
    return (
        <Grid2 container flexDirection="column" alignItems="flex-start" spacing={2}>
            <Grid2>
                <Typography variant="h1">{'Main'}</Typography>
            </Grid2>

            <Grid2>
                <Link href="/profile">
                    <Button color="primary">{'Go to profile'}</Button>
                </Link>
            </Grid2>
            <Grid2>
                <Link href="/signin">
                    <Button color="secondary">{'Авторизуватися'}</Button>
                </Link>
            </Grid2>
            <Grid2>
                <Link href="/profile">
                    <Button variant="outlined" color="primary">
                        {'Go to profile'}
                    </Button>
                </Link>
            </Grid2>
            <Grid2>
                <Link href="/signin">
                    <Button variant="outlined" color="secondary">
                        {'Авторизуватися'}
                    </Button>
                </Link>
            </Grid2>
        </Grid2>
    );
};

export default Main;
