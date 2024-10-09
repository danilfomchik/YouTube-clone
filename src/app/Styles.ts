'use client';

import {Box, styled} from '@mui/material';

export const MainContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
}));

export const Main = styled('div')(() => ({
    flexGrow: 1,
}));
