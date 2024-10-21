'use client';

import React, {ReactNode} from 'react';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {SnackbarProvider} from 'notistack';

import {lightTheme} from './common/themes/themes';
import Snackbar from './snackbar';

const Theme = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <CssBaseline />
                <Snackbar />
                {children}
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default Theme;
