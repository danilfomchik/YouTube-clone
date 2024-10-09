import LanguageMenu from './menus/LanguageMenu';
import MainMenu from './menus/MainMenu';
import SettingsMenu from './menus/SettingsMenu';
import ThemeMenu from './menus/ThemeMenu';
import {menusOptions} from './menusOptions';
import {IMenuItem, MenusEnum} from './types';

export const menus: IMenuItem[] = [
    {
        name: MenusEnum.mainMenu,
        menuComponent: <MainMenu menuOptions={menusOptions[MenusEnum.mainMenu]} />,
    },
    {
        name: MenusEnum.languageMenu,
        menuComponent: <LanguageMenu menuOptions={menusOptions[MenusEnum.languageMenu]} />,
    },
    {
        name: MenusEnum.themeMenu,
        menuComponent: <ThemeMenu menuOptions={menusOptions[MenusEnum.themeMenu]} />,
    },
    {
        name: MenusEnum.settingsMenu,
        menuComponent: <SettingsMenu menuOptions={menusOptions[MenusEnum.settingsMenu]} />,
    },
];
