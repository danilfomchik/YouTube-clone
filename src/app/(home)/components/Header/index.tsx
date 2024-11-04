'use client';

import React from 'react';
import {useSelector} from 'react-redux';
import {Grid2, IconButton, Toolbar, Typography, Link as MuiLink} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';

import {MuiAppBar} from './Styles';
import {useAppDispatch} from '@/app/redux/store';
import {toggleNavbar} from '@/app/redux/navbar/navbarSlice';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';
import AccountMenu from './components/AccountMenu';
import LoginButton from '@/app/components/Buttons/LoginButton';
import Search from './components/Search';
import {selectIsUserLoggedIn} from '@/app/redux/auth/selectors';

const Header = () => {
    const dispatch = useAppDispatch();
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
    const isNavbarOpen = useSelector(selectNavbarStatus);

    const onDrawerOpen = () => {
        dispatch(toggleNavbar());
    };

    return (
        <>
            <MuiAppBar position="fixed" open={isNavbarOpen}>
                <Toolbar>
                    <Grid2 mr={2}>
                        <IconButton aria-label="open drawer" onClick={onDrawerOpen} edge="start">
                            {isNavbarOpen ? <MenuOpenTwoToneIcon /> : <MenuIcon />}
                        </IconButton>
                    </Grid2>

                    <MuiLink href="/" underline="none" component={Link}>
                        <Grid2 container alignItems="center">
                            <SmartDisplayRoundedIcon color="secondary" sx={{display: {xs: 'none', md: 'flex'}}} />
                            <Typography variant="h6" noWrap>
                                LOGO
                            </Typography>
                        </Grid2>
                    </MuiLink>

                    <Grid2 container justifyContent="center" flexGrow={1}>
                        <Search />
                    </Grid2>

                    <Grid2>
                        {isUserLoggedIn ? (
                            <AccountMenu />
                        ) : (
                            <LoginButton
                                open={isNavbarOpen}
                                startIcon={<AccountCircleOutlinedIcon color="secondary" />}
                            />
                        )}
                    </Grid2>
                </Toolbar>
            </MuiAppBar>
        </>
    );
};

export default Header;
