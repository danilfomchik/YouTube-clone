'use client';

import React from 'react';
import {Avatar, Divider, Grid2} from '@mui/material';
import {useSelector} from 'react-redux';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import {MenusEnum, TMenu} from '../../types';
import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {selectUserData} from '@/app/redux/auth/selectors';
import {changeCurrentMenu} from '@/app/redux/accountMenu/accountMenuSlice';
import {onUserSignOut} from '@/app/redux/auth/thunks';

const MainMenu = ({name}: TMenu) => {
    const dispatch = useAppDispatch();
    const {photoURL, displayName} = useSelector(selectUserData)!;

    const onOpenSettings = () => {
        dispatch(changeCurrentMenu({nextMenu: MenusEnum.settingsMenu, prevMenu: name}));
    };

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
            <MenuItem icon={<Settings fontSize="small" />} text="Settings" onClick={onOpenSettings} hasNested={true} />
            <MenuItem icon={<Logout fontSize="small" />} text="Logout" onClick={handleUserSignOut} hasNested={false} />
        </>
    );
};

export default MainMenu;
