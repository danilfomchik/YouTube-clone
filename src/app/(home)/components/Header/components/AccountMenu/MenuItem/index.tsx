import React from 'react';
import {
    MenuItem as MuiMenuItem,
    ListItemIcon,
    Typography,
    MenuItemProps as MuiMenuItemProps,
    Grid2,
} from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import {MenuItemProps} from './types';

const MenuItem = ({icon = null, text, hasNested = false, ...restProps}: MenuItemProps & MuiMenuItemProps) => {
    return (
        <MuiMenuItem sx={{justifyContent: 'space-between'}} {...restProps}>
            <Grid2 container alignItems="center">
                {icon && <ListItemIcon sx={{marginRight: 2}}>{icon}</ListItemIcon>}

                <Typography component="span" variant="body2">
                    {text}
                </Typography>
            </Grid2>

            {/* TODO: add animation on hover -> arrow slides to the right */}
            {hasNested && (
                <ListItemIcon sx={{marginLeft: 2}}>
                    <ArrowForwardIosRoundedIcon fontSize="small" />
                </ListItemIcon>
            )}
        </MuiMenuItem>
    );
};

export default MenuItem;
