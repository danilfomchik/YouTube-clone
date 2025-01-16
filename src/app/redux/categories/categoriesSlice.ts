import Cookies from 'js-cookie';

import createGenericSlice, {IGenericState} from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {onLoadCategoriesList} from './thunks';
import {ICommonState} from './types';
import {StorageKeys} from '@/app/services/types';
import {getParsedStorageValue} from '@/app/services/utils';
import {initialCategoryIndex, initialCategory} from '@/app/services/constants';

const reducers = {
    changeCurrentCategory: (
        state: IGenericState<ICommonState>,
        {
            payload,
        }: {
            payload: {
                categoryIndex: number;
                categoryId: string;
            };
        },
    ) => {
        state.data.currentCategory = payload.categoryId;
        state.data.currentCategoryIndex = payload.categoryIndex;

        Cookies.set(StorageKeys.currentCategory, payload.categoryId, {
            sameSite: 'Strict',
        });
        Cookies.set(StorageKeys.currentCategoryIndex, payload.categoryIndex.toString(), {
            sameSite: 'Strict',
        });
    },
    clearCategoriesData: (state: IGenericState<ICommonState>) => {
        state.data.currentCategory = initialCategory;
        state.data.currentCategoryIndex = initialCategoryIndex;

        Cookies.remove(StorageKeys.currentCategory);
        Cookies.remove(StorageKeys.currentCategoryIndex);
    },
};

const initCategory = getParsedStorageValue(StorageKeys.currentCategory, initialCategory);
const initCategoryIndex = getParsedStorageValue(StorageKeys.currentCategoryIndex, initialCategoryIndex);

const initialData = {
    categories: [],
    currentCategory: initCategory,
    currentCategoryIndex: +initCategoryIndex,
};

export const categoriesData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.categoriesData,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: builder => {
        builder
            .addCase(onLoadCategoriesList.fulfilled, (state, {payload}) => {
                state.data.categories = payload.items;
            })
            .addCase(onLoadCategoriesList.rejected, state => {
                categoriesData.caseReducers.resetSlice(state);
                categoriesData.caseReducers.clearCategoriesData(state);
            });
    },
});

export const {resetSlice, resetError, changeCurrentCategory, clearCategoriesData} = categoriesData.actions;
export default categoriesData.reducer;
