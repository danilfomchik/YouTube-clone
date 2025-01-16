export interface ICategory {
    id: string;
    snippet: {
        title: string;
    };
}

export interface ICommonState {
    categories: ICategory[];
    currentCategory: string;
    currentCategoryIndex: number;
}

export enum IThunkNames {
    onLoadCategoriesList = 'loadCategoriesList',
}
