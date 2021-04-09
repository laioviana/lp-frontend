import config from "../../config";
import { FETCH_MOST_VISITED_ERROR, FETCH_MOST_VISITED_SUCCESS } from '../actions/actionTypes';
import { setBackdropClosed, setBackdropOpen } from "../actions/common";

export const fetchMostVisitedSuccess = (data) => ({
    type: FETCH_MOST_VISITED_SUCCESS,
    payload: {
        data,
    }
});

export const fetchMostVisitedError = (error) => ({
    type: FETCH_MOST_VISITED_ERROR,
    payload: error
});

export const fetchMostVisited = () => {
    return (dispatch) => {
        dispatch(setBackdropOpen());        
        config.axiosInstance.get(`/most-visited`)
            .then(res => {
                dispatch(fetchMostVisitedSuccess(res.data));
            }, err => {
                dispatch(fetchMostVisitedError(err));
            }).finally(() => dispatch(setBackdropClosed()));
    }
};
