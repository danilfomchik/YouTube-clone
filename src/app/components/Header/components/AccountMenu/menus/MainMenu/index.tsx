'use client';

import React from 'react';
import {Avatar, Divider, Grid2} from '@mui/material';
import {useSelector} from 'react-redux';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import {MenusEnum} from '../../types';
import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {selectUserData} from '@/app/redux/auth/selectors';
import {onUserSignOut} from '@/app/redux/auth/thunks';
import {onChangeMenu} from '../utils';

const MainMenu = () => {
    const dispatch = useAppDispatch();
    const {photoURL, displayName} = useSelector(selectUserData)!;

    const handleUserSignOut = () => {
        dispatch(onUserSignOut());
    };

    return (
        <>
            <MenuItem icon={<Avatar alt={displayName} src={photoURL} />} text={displayName} />

            <Grid2 my={2}>
                <Divider />
            </Grid2>

            <MenuItem icon={<PersonAdd fontSize="small" />} text="Add another account" hasNested={false} />
            <MenuItem
                icon={<Settings fontSize="small" />}
                text="Settings"
                onClick={() => onChangeMenu({dispatch, nextMenu: MenusEnum.settingsMenu, prevMenu: MenusEnum.mainMenu})}
                hasNested={true}
            />
            <MenuItem icon={<Logout fontSize="small" />} text="Logout" onClick={handleUserSignOut} hasNested={false} />
        </>
    );
};

export default MainMenu;
