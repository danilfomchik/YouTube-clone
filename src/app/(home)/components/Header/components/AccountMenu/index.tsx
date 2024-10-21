import React, {useState} from 'react';
import {Tooltip, IconButton, Avatar, Menu, Grid2} from '@mui/material';
import {useSelector} from 'react-redux';

import {selectCurrentMenu, selectPrevMenu} from '@/app/redux/accountMenu/selectors';
import {useAppDispatch} from '@/app/redux/store';
import {resetMenu} from '@/app/redux/accountMenu/accountMenuSlice';
import {menus} from './menus';
import ReturnBack from './ReturnBack';

const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const dispatch = useAppDispatch();
    const currentMenu = useSelector(selectCurrentMenu);
    const prevMenus = useSelector(selectPrevMenu)?.length;

    const open = !!anchorEl;

    const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
        if (open) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const onMenuClose = () => {
        if (prevMenus) {
            dispatch(resetMenu());
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
                {!!prevMenus && <ReturnBack />}

                {menus[currentMenu]}
            </Menu>
        </>
    );
};

export default AccountMenu;
