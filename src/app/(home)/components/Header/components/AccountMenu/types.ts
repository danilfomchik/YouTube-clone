import {ComponentType, ReactElement} from 'react';

type StringValues<T> = {
    [K in keyof T]: T[K] extends string ? T[K] : never;
}[keyof T];

type NumberValues<T> = {
    [K in keyof T]: T[K] extends number ? T[K] : never;
}[keyof T];

type EnumAsUnion<T> = `${StringValues<T>}` | NumberValues<T>;

export enum MenusEnum {
    mainMenu = 'mainMenu',
    settingsMenu = 'settingsMenu',
    languageMenu = 'languageMenu',
    themeMenu = 'themeMenu',
}

export type MenuEnumValues = EnumAsUnion<typeof MenusEnum>;

export type TMenuOption = {
    icon?: ReactElement | null;
    text: string;
    hasNested: boolean;
    nextMenu?: MenusEnum;
    onClick?: () => void;
};

export type TMenu = {
    menuOptions: TMenuOption[];
};

export interface IMenuItem {
    name: MenusEnum;
    menuComponent: ReactElement<ComponentType<TMenu>>;
}
