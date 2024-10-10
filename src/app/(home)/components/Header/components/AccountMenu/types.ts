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

// export type TMenuOption = {
//     icon?: ReactElement | null;
//     text: string;
//     hasNested: boolean;
//     nextMenu?: MenusEnum;
//     onClick?: () => void;
// };
type OptionalMenuOption =
    | {
          hasNested: true;
          nextMenu: MenusEnum;
      }
    | {
          hasNested?: undefined;
          nextMenu?: undefined;
      };

export type TMenuOption = {
    icon?: ReactElement | null;
    text: string;
    onClick?: () => void;
} & OptionalMenuOption;

export type TMenu = {
    menuOptions: TMenuOption[];
    name: MenusEnum;
};

export interface IMenuItem {
    [key: string]: ReactElement<ComponentType<TMenu>>;
}
