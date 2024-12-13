import {AppStoreState} from '../store';

export const selectCurrentMenu = (state: AppStoreState) => state.accountMenu.data.currentMenu;
export const selectPrevMenu = (state: AppStoreState) => state.accountMenu.data.prevMenus;
