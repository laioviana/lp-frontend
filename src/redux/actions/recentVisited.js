import config from "../../config";
import { FETCH_RECENT_VISITED_ERROR, FETCH_RECENT_VISITED_SUCCESS } from '../actions/actionTypes';
import { setBackdropClosed, setBackdropOpen } from "../actions/common";

export const fetcRecentVisitedSuccess = (data) => ({
    type: FETCH_RECENT_VISITED_SUCCESS,
    payload: {
        data,
    }
});

export const fetchRecentVisitedError = (error) => ({
    type: FETCH_RECENT_VISITED_ERROR,
    payload: error
});

export const fetchRecentVisited = () => {
    return (dispatch) => {
        dispatch(setBackdropOpen());        
        config.axiosInstance.get(`/recent-visited`)
            .then(res => {
                dispatch(fetcRecentVisitedSuccess(res.data));
            }, err => {
                dispatch(fetchRecentVisitedError(err));
            }).finally(() => dispatch(setBackdropClosed()));
    }
};
