'use client';

import React, {useState} from 'react';
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

const Header = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAuth, setIsAuth] = useState(true);

    const dispatch = useAppDispatch();
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
                            <SmartDisplayRoundedIcon
                                color="secondary"
                                sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                }}>
                                LOGO
                            </Typography>
                        </Grid2>
                    </MuiLink>

                    <Grid2 container justifyContent="center" flexGrow={1}>
                        <Search />
                    </Grid2>

                    <Grid2>
                        {isAuth ? (
                            <AccountMenu />
                        ) : (
                            <LoginButton open={isNavbarOpen} startIcon={<AccountCircleOutlinedIcon />} />
                        )}
                    </Grid2>
                </Toolbar>
            </MuiAppBar>
        </>
    );
};

export default Header;
