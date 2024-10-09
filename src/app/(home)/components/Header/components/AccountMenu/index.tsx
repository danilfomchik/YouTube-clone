import React, {useState} from 'react';
import {Tooltip, IconButton, Avatar, Menu, Grid2} from '@mui/material';
import {useSelector} from 'react-redux';

import {selectCurrentMenuIndex} from '@/app/redux/accountMenu/selectors';
import {useAppDispatch} from '@/app/redux/store';
import {resetMenuIndex} from '@/app/redux/accountMenu/accountMenuSlice';
import {menus} from './menus';

// TODO: undo commit and add more files

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const dispatch = useAppDispatch();
    const currentMenuIndex = useSelector(selectCurrentMenuIndex);

    const open = !!anchorEl;

    const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
        if (open) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const onMenuClose = () => {
        if (currentMenuIndex > 0) {
            dispatch(resetMenuIndex());
        }
    };

    return (
        <>
            <Grid2 container alignItems="center" textAlign="center" ml={2}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleMenuToggle}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    </IconButton>
                </Tooltip>
            </Grid2>

            <Menu
                onTransitionExited={onMenuClose}
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuToggle}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                slotProps={{
                    paper: {
                        style: {
                            minWidth: '250px',
                        },
                    },
                }}>
                {menus[currentMenuIndex].menuComponent}
            </Menu>
        </>
    );
};

export default AccountMenu;
