import {MenusEnum} from '@/app/(home)/components/Header/components/AccountMenu/types';

export interface ICommonState {
    currentMenu: MenusEnum;
    prevMenus: MenusEnum[] | null;
}
