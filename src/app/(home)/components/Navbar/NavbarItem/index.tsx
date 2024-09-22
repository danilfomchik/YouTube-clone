import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MuiLink} from '@mui/material';
import Link from 'next/link';

import {NavbarItemProps} from './types';

const NavbarItem = ({page, navbarStatus, handleListItemClick, isSelected, pageIndex}: NavbarItemProps) => {
    return (
        <MuiLink key={page.label} href={page.path} underline="none" component={Link}>
            <ListItem disablePadding sx={{display: 'block'}} open={navbarStatus}>
                <ListItemButton disableRipple selected={isSelected} onClick={() => handleListItemClick(pageIndex)}>
                    <ListItemIcon>{isSelected ? page.activeIcon : page.defaultIcon}</ListItemIcon>
                    <ListItemText primary={page.label} />
                </ListItemButton>
            </ListItem>
        </MuiLink>
    );
};

export default NavbarItem;
