'use client';

import React, {useEffect} from 'react';
import {Box, Grid2, useMediaQuery, useTheme} from '@mui/material';

import Navbar from './components/Navbar';
import Header from './components/Header';
import {DrawerHeader} from './components/Header/Styles';
import {useAppDispatch} from '../redux/store';
import {setNavbarStatus} from '../redux/navbar/navbarSlice';

type Props = {
    children: React.ReactNode;
};

const MainPageLayout = ({children}: Props) => {
    const dispatch = useAppDispatch();

    const theme = useTheme();
    const screenUpperMd = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        dispatch(setNavbarStatus(screenUpperMd));
    }, [screenUpperMd, dispatch]);

    return (
        <Grid2 container flexWrap="nowrap">
            <Header />
            <Navbar />

            <Box component="main" p={3}>
                <DrawerHeader />
                {children}
            </Box>
        </Grid2>
    );
};

export default MainPageLayout;
