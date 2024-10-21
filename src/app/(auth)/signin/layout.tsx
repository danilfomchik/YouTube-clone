'use client';

import React from 'react';
import {Grid2} from '@mui/material';

type Props = {
    children: React.ReactNode;
};

const SignInLayout = ({children}: Props) => {
    return (
        <Grid2 container justifyContent="center">
            <Grid2 size={10}>{children}</Grid2>
        </Grid2>
    );
};

export default SignInLayout;
