'use client';

import React, {useEffect, useState} from 'react';
import {CircularProgress, Grid2, useMediaQuery, useTheme} from '@mui/material';

import {useAppDispatch} from '../redux/store';
import {setNavbarStatus} from '../redux/navbar/navbarSlice';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {DrawerHeader} from '../components/Header/Styles';

type Props = {
    children: React.ReactNode;
};

const MainPageLayout = ({children}: Props) => {
    const [isMount, setIsMount] = useState(false);

    const dispatch = useAppDispatch();
    const theme = useTheme();
    const screenUpperMd = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        setIsMount(true);
    }, []);

    useEffect(() => {
        dispatch(setNavbarStatus(screenUpperMd));
    }, [screenUpperMd, dispatch]);

    return (
        <>
            {isMount ? (
                <Grid2 container flexWrap="nowrap">
                    <Header />
                    <Navbar />

                    <Grid2 component="main" sx={{px: {xs: 2, sm: 3}, width: {xs: '100%'}, minWidth: 'auto'}}>
                        <DrawerHeader />
                        {children}
                    </Grid2>
                </Grid2>
            ) : (
                <Grid2 container justifyContent={'center'} size={{xs: 12}}>
                    <CircularProgress color="inherit" size={30} />
                </Grid2>
            )}
        </>
    );
};

export default MainPageLayout;
