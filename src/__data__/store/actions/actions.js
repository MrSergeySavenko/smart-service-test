import { smartServiceSlice } from '../reduser';

export const fetchData = () => async (dispatch) => {
    try {
        dispatch(smartServiceSlice.actions.dataFetch());

        const url = `http://localhost:3001/users`;

        const response = await fetch(url);
        const data = await response.json();

        if (response) {
            dispatch(smartServiceSlice.actions.dataFetchSuccess(data));
        }
    } catch (err) {
        dispatch(smartServiceSlice.actions.dataFetchFailure(err));
        console.error(err);
    }
};
