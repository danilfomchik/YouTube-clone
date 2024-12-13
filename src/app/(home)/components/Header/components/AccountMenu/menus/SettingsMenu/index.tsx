'use client';

import React from 'react';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';

import {useAppDispatch} from '@/app/redux/store';
import MenuItem from '../../MenuItem';
import {MenusEnum} from '../../types';
import {onChangeMenu} from '../utils';

export const settings = [
    {
        icon: <TranslateRoundedIcon fontSize="small" />,
        text: 'Language',
        hasNested: true,
        nextMenu: MenusEnum.languageMenu,
    },
    {
        icon: <ContrastRoundedIcon fontSize="small" />,
        text: 'Theme',
        hasNested: true,
        nextMenu: MenusEnum.themeMenu,
    },
];

const SettingsMenu = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            {settings.map(item => {
                const {icon, text, hasNested, nextMenu} = item;

                return (
                    <MenuItem
                        key={text}
                        icon={icon}
                        text={text}
                        hasNested={hasNested}
                        onClick={() => onChangeMenu({dispatch, nextMenu, prevMenu: MenusEnum.settingsMenu})}
                    />
                );
            })}
        </>
    );
};

export default SettingsMenu;
