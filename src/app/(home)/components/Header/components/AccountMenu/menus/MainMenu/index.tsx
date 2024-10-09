'use client';

import React from 'react';
import {Avatar, Divider, Grid2} from '@mui/material';

import {TMenu} from '../../types';
import {useAppDispatch} from '@/app/redux/store';
import {handleMenuItemClick} from '../../utils';
import MenuItem from '../../MenuItem';

const MainMenu = ({menuOptions}: TMenu) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <MenuItem
                icon={<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />}
                text="Ali Connors"
            />

            <Grid2 my={2}>
                <Divider />
            </Grid2>

            {menuOptions.map(item => {
                const {icon, text, hasNested} = item;

                return (
                    <MenuItem
                        key={text}
                        icon={icon}
                        text={text}
                        onClick={() => handleMenuItemClick(dispatch, item)}
                        hasNested={hasNested}
                    />
                );
            })}
        </>
    );
};

export default MainMenu;
