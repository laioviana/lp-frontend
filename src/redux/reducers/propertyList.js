import { FETCH_PROPERTY_LIST_ERROR, FETCH_PROPERTY_LIST_SUCCESS } from "../actions/actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PROPERTY_LIST_SUCCESS: {
            return {
                ...state,
                properties: action.payload.content,
                page: Number(action.payload.page),
                rowsPerPage: Number(action.payload.rowsPerPage),
                totalElements: Number(action.payload.totalElements)
            }
        }
        case FETCH_PROPERTY_LIST_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
