'use client';

import React, {useEffect} from 'react';
import {Box, useMediaQuery, useTheme} from '@mui/material';

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
        if (screenUpperMd) {
            dispatch(setNavbarStatus(true));
        } else {
            dispatch(setNavbarStatus(false));
        }
    }, [screenUpperMd, dispatch]);

    return (
        <Box sx={{display: 'flex'}}>
            <Header />
            <Navbar />

            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader />
                {children}
                {children}
                {children}
                {children}
                {children}
            </Box>
        </Box>
    );
};

export default MainPageLayout;
