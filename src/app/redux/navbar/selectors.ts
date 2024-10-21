import {IRootState} from '../types';

export const selectNavbarStatus = (state: IRootState) => state.navbar.data.isNavbarOpen;
