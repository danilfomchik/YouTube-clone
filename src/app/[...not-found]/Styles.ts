'use client';

import {Box, styled, Typography} from '@mui/material';

export const BoxContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(10, 3, 17),

    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(7, 3, 10),
    },

    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(17, 3, 7),
    },
}));

export const Title = styled(Typography)(({theme}) => ({
    fontSize: '2.4rem',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '140%',
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('sm')]: {
        fontSize: '3.9rem',
        lineHeight: '130%',
    },
}));
