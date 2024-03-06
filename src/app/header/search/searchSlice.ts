import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import qs from "query-string";

import { RootState } from "../../store";

const { searchQuery } = qs.parse(document.location.search);

type TSearchState = {
    searchValue: typeof searchQuery;
};

const initialState: TSearchState = {
    searchValue: searchQuery || "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onSearch: (state, action: PayloadAction<typeof searchQuery>) => {
            state.searchValue = action.payload;
        },
        resetSearchValue: (state) => {
            state.searchValue = "";
        },
    },
});

const { reducer, actions } = searchSlice;

export const { onSearch, resetSearchValue } = actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export default reducer;
