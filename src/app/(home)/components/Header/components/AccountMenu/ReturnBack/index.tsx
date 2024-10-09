import React from 'react';
import {MenuItem, ListItemIcon, Typography, Grid2, Divider} from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import {useAppDispatch} from '@/app/redux/store';
import {returnToPrevMenuIndex} from '@/app/redux/accountMenu/accountMenuSlice';

const ReturnBack = () => {
    const dispatch = useAppDispatch();

    const onReturn = () => {
        dispatch(returnToPrevMenuIndex());
    };

    return (
        <>
            <MenuItem onClick={onReturn}>
                <ListItemIcon sx={{marginRight: 2}}>
                    <ArrowBackIosNewRoundedIcon fontSize="small" />
                </ListItemIcon>

                <Typography component="span" variant="body2">
                    Return back
                </Typography>
            </MenuItem>

            <Grid2 my={2}>
                <Divider />
            </Grid2>
        </>
    );
};

export default ReturnBack;
