import {MenusEnum} from '@/app/(home)/components/Header/components/AccountMenu/types';
import createGenericSlice from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {ICommonState} from './types';

const defaultMenu = MenusEnum.mainMenu;

const reducers = {
    changeCurrentMenu: (state: any, {payload}: {payload: {prevMenu: MenusEnum; nextMenu: MenusEnum}}) => {
        const {prevMenu, nextMenu} = payload;

        const prevMenuState = state.data.prevMenus;

        state.data.currentMenu = nextMenu;
        state.data.prevMenus = [...prevMenuState, prevMenu];
    },
    resetMenu: (state: any) => {
        state.data.currentMenu = defaultMenu;
        state.data.prevMenus = [];
    },
    returnToPrevMenu: (state: any) => {
        const prevMenuState = state.data.prevMenus;
        const prevMenuStateLastItem = prevMenuState.length - 1;

        state.data.currentMenu = prevMenuState[prevMenuStateLastItem];
        state.data.prevMenus.pop();
    },
};

const initialData = {
    currentMenu: defaultMenu,
    prevMenus: [],
};

export const accountMenuData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.accountMenu,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: () => {},
});

export const {resetSlice, returnToPrevMenu, resetMenu, changeCurrentMenu} = accountMenuData.actions;
export default accountMenuData.reducer;
