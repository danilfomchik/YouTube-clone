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
        <MuiMenuItem {...restProps}>
            <Grid2 container flexWrap="nowrap" alignItems="center">
                {icon && <ListItemIcon>{icon}</ListItemIcon>}

                <Typography component="span" variant="body2">
                    {text}
                </Typography>
            </Grid2>

            {hasNested && (
                <ListItemIcon>
                    <ArrowForwardIosRoundedIcon fontSize="small" />
                </ListItemIcon>
            )}
        </MuiMenuItem>
    );
};

export default MenuItem;
