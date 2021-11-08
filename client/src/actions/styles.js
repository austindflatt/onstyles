import * as api from '../api';

// Action creators
export const getStyles = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStyles();
        dispatch({ type: 'FETCH_ALL', payload: [] });
    } catch (error) {
        console.log(error.message);
    }
}

export const createStyle = (style) => async (dispatch) => {
    try {
        const { data } = await api.createStyle(style);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}