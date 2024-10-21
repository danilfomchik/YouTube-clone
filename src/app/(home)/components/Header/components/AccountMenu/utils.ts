import {changeCurrentMenu} from '@/app/redux/accountMenu/accountMenuSlice';
import {MenusEnum, TMenuOption} from './types';
import {AppDispatch} from '@/app/redux/store';

type THandleMenuItemClick = {
    dispatch: AppDispatch;
    item: TMenuOption;
    name: MenusEnum;
};

export const handleMenuItemClick = ({dispatch, item, name}: THandleMenuItemClick) => {
    const {hasNested, nextMenu, onClick} = item;

    if (hasNested && nextMenu) {
        dispatch(changeCurrentMenu({nextMenu, prevMenu: name}));
    }

    if (onClick) {
        onClick();
    }
};
