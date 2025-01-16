import {AppStoreState} from '../store';

export const selectCategories = (state: AppStoreState) => state.categoriesData.data.categories;
export const selectCurrentCategory = (state: AppStoreState) => state.categoriesData.data.currentCategory;
export const selectCurrentCategoryIndex = (state: AppStoreState) => state.categoriesData.data.currentCategoryIndex;
