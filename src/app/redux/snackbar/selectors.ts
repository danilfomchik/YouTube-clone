import {IRootState} from '../types';

export const selectMessages = (state: IRootState) => state.snackbar;
