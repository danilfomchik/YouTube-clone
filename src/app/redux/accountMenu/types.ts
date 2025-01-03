import {MenusEnum} from '@/app/components/Header/components/AccountMenu/types';

export interface ICommonState {
    data: {
        currentMenu: MenusEnum;
        prevMenus: MenusEnum[];
    };
}
