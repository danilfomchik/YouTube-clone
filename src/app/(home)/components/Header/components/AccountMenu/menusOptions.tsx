/* eslint-disable no-console */
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import {MenusEnum, TMenuOption} from './types';

export const menusOptions: {[key in MenusEnum]: TMenuOption[]} = {
    [MenusEnum.mainMenu]: [
        {
            icon: <PersonAdd fontSize="small" />,
            text: 'Add another account',
            hasNested: false,
            onClick: () => console.log('Add another account'),
        },
        {
            icon: <Settings fontSize="small" />,
            text: 'Settings',
            hasNested: true,
            nextMenu: MenusEnum.settingsMenu,
        },
        {
            icon: <Logout fontSize="small" />,
            text: 'Logout',
            hasNested: false,
            onClick: () => console.log('Logout'),
        },
    ],
    [MenusEnum.settingsMenu]: [
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
    ],
    [MenusEnum.languageMenu]: [
        {
            text: 'English',
            hasNested: false,
        },
        {
            text: 'Ukrainian',
            hasNested: false,
        },
        {
            text: 'Italian',
            hasNested: false,
        },
    ],
    [MenusEnum.themeMenu]: [
        {
            text: 'Dark',
            hasNested: false,
        },
        {
            text: 'Light',
            hasNested: false,
        },
        {
            text: 'Device',
            hasNested: false,
        },
    ],
};
