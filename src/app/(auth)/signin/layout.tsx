'use client';

import React from 'react';
import {Grid} from '@mui/material';

type Props = {
    children: React.ReactNode;
};

const SignInLayout = ({children}: Props) => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
};

export default SignInLayout;