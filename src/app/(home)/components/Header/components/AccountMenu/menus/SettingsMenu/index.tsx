'use client';

import React from 'react';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';

import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {MenusEnum, TMenu} from '../../types';
import {changeCurrentMenu} from '@/app/redux/accountMenu/accountMenuSlice';

const SettingsMenu = ({name}: TMenu) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <MenuItem
                icon={<TranslateRoundedIcon fontSize="small" />}
                text="Language"
                onClick={() => {
                    dispatch(changeCurrentMenu({nextMenu: MenusEnum.languageMenu, prevMenu: name}));
                }}
                hasNested={true}
            />
            <MenuItem
                icon={<ContrastRoundedIcon fontSize="small" />}
                text="Theme"
                onClick={() => {
                    dispatch(changeCurrentMenu({nextMenu: MenusEnum.themeMenu, prevMenu: name}));
                }}
                hasNested={true}
            />
        </>
    );
};

export default SettingsMenu;
