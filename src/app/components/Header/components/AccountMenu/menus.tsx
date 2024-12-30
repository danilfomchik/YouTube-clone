import LanguageMenu from './menus/LanguageMenu';
import MainMenu from './menus/MainMenu';
import SettingsMenu from './menus/SettingsMenu';
import ThemeMenu from './menus/ThemeMenu';
import {IMenuItem, MenusEnum} from './types';

export const menus: IMenuItem = {
    [MenusEnum.mainMenu]: <MainMenu />,
    [MenusEnum.settingsMenu]: <SettingsMenu />,
    [MenusEnum.languageMenu]: <LanguageMenu />,
    [MenusEnum.themeMenu]: <ThemeMenu />,
};
