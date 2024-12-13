import {AppStoreState} from '../store';

export const selectMessages = (state: AppStoreState) => state.snackbar;
