import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isError: false,
    data: null,
};

export const smartServiceSlice = createSlice({
    name: 'smartService',
    initialState: initialState,
    reducers: {
        dataFetch(state) {
            return { ...state, isLoading: true };
        },
        dataFetchSuccess(state, action) {
            return { ...state, isLoading: false, isError: true, data: action.payload };
        },
        dataFetchSuccess(state, action) {
            return { ...state, isLoading: false, data: action.payload };
        },
    },
});

export default smartServiceSlice.reducer;
