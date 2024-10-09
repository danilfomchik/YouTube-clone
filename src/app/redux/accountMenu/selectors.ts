import {IRootState} from '../types';

export const selectCurrentMenuIndex = (state: IRootState) => state.accountMenu.data.currentMenuIndex;
