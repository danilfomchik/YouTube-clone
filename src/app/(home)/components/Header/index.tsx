'use client';

import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import {MuiAppBar, Search, SearchIconWrapper, StyledInputBase} from './Styles';
import {useAppDispatch} from '@/app/redux/store';
import {toggleNavbar} from '@/app/redux/navbar/navbarSlice';
import {selectNavbarStatus} from '@/app/redux/navbar/selectors';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const dispatch = useAppDispatch();
    const navbarStatus = useSelector(selectNavbarStatus);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <MuiAppBar position="fixed" open={navbarStatus}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(toggleNavbar())}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                    ]}>
                    {navbarStatus ? <MenuOpenTwoToneIcon /> : <MenuIcon />}
                </IconButton>

                <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    LOGO
                </Typography>

                {/* eslint-disable-next-line max-len */}
                {/* <LogInButton fullWidth variant="outlined" color="secondary" startIcon={<AccountCircleOutlinedIcon />}>
                    Log in
                </LogInButton> */}

                <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" onChange={() => {}} />
                    </Search>
                </Box>
                {/* TODO: make Avatar as separate component */}
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}>
                        {settings.map(setting => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography sx={{textAlign: 'center'}}>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
};

export default Header;
