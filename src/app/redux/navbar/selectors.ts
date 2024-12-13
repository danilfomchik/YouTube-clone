import {AppStoreState} from '../store';

export const selectNavbarStatus = (state: AppStoreState) => state.navbar.data.isNavbarOpen;
