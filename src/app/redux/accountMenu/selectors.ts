import {IRootState} from '../types';

export const selectCurrentMenu = (state: IRootState) => state.accountMenu.data.currentMenu;
export const selectPrevMenu = (state: IRootState) => state.accountMenu.data.prevMenus;
