import { createSlice  } from '@reduxjs/toolkit';

const initialState = {

}


export const smartServiceSlice = createSlice({
    name: 'smartService',
    initialState: initialState,
    reducers: {
        dataFetch(state) {
            return { ...state, isLoading: true };
        },
        dataFetchSuccess(state , action) {
            return { ...state, isLoading: false, data: action.payload };
        },
    }
})

export default smartServiceSlice.reducer;