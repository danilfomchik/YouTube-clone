import {setCurrentMenuIndex} from '@/app/redux/accountMenu/accountMenuSlice';
import {MenusEnum, TMenuOption} from './types';
import {AppDispatch} from '@/app/redux/store';
import {menus} from './menus';

export const getMenuIndex = (menuName: MenusEnum) => {
    return menus.map(menu => menu.name).indexOf(menuName);
};

export const handleMenuItemClick = (dispatch: AppDispatch, item: TMenuOption) => {
    const {hasNested, nextMenu, onClick} = item;

    const nextMenuIndex = menus.map(menu => menu.name).indexOf(nextMenu as MenusEnum);

    if (hasNested) {
        dispatch(setCurrentMenuIndex(nextMenuIndex));
    }

    if (onClick) {
        onClick();
    }
};
