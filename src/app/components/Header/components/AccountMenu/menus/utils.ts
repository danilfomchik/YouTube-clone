import {AppDispatch} from '@/app/redux/store';
import {MenusEnum} from '../types';
import {changeCurrentMenu} from '@/app/redux/accountMenu/accountMenuSlice';

type TOnChangeMenuArgs = {
    dispatch: AppDispatch;
    nextMenu: MenusEnum;
    prevMenu: MenusEnum;
};

export const onChangeMenu = ({dispatch, nextMenu, prevMenu}: TOnChangeMenuArgs) => {
    dispatch(changeCurrentMenu({nextMenu, prevMenu}));
};
