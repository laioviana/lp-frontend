import config from "../../config";
import { FETCH_PROPERTY_LIST_ERROR, FETCH_PROPERTY_LIST_SUCCESS } from '../actions/actionTypes';
import { setBackdropClosed, setBackdropOpen } from "../actions/common";

export const fetchPropertyListSuccess = (data) => ({
    type: FETCH_PROPERTY_LIST_SUCCESS,
    payload: {
        content: data.content,
        totalElements: data.totalElements,
        page: data.page,
        rowsPerPage: data.size
    }
});

export const fetchPropertyListError = (error) => ({
    type: FETCH_PROPERTY_LIST_ERROR,
    payload: error
});

export const fetchPropertyList = (search, page, rowsPerPage) => {
    return (dispatch) => {
        dispatch(setBackdropOpen());        
        config.axiosInstance.get(`/list/${encodeURIComponent(search)}?page=${page}&size=${rowsPerPage}`)
            .then(res => {
                dispatch(fetchPropertyListSuccess(res.data));
            }, err => {
                dispatch(fetchPropertyListError(err));
            }).finally(() => dispatch(setBackdropClosed()));
    }
};

export const changeRowsPerPage = (rowsPerPage, search) => {
    return (dispatch) => {        
        dispatch(fetchPropertyList(search, 0, rowsPerPage));
    }
}