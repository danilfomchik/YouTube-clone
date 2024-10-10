import LanguageMenu from './menus/LanguageMenu';
import MainMenu from './menus/MainMenu';
import SettingsMenu from './menus/SettingsMenu';
import ThemeMenu from './menus/ThemeMenu';
import {menusOptions} from './menusOptions';
import {IMenuItem, MenusEnum} from './types';

export const menus: IMenuItem = {
    [MenusEnum.mainMenu]: <MainMenu menuOptions={menusOptions[MenusEnum.mainMenu]} name={MenusEnum.mainMenu} />,
    [MenusEnum.settingsMenu]: (
        <SettingsMenu menuOptions={menusOptions[MenusEnum.settingsMenu]} name={MenusEnum.settingsMenu} />
    ),
    [MenusEnum.languageMenu]: (
        <LanguageMenu menuOptions={menusOptions[MenusEnum.languageMenu]} name={MenusEnum.languageMenu} />
    ),
    [MenusEnum.themeMenu]: <ThemeMenu menuOptions={menusOptions[MenusEnum.themeMenu]} name={MenusEnum.themeMenu} />,
};
