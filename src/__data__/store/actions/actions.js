import { smartServiceSlice } from '../reduser';

export const fetchData = () => async (dispatch) => {
    try {
        dispatch(smartServiceSlice.actions.dataFetch());

        const url = `https://mrsergeysavenko.github.io/server-for-smart-service/db.json`;

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
