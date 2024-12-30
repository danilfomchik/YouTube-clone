import {MenusEnum} from '@/app/components/Header/components/AccountMenu/types';

export interface ICommonState {
    currentMenu: MenusEnum;
    prevMenus: MenusEnum[];
}
