import { FETCH_RECENT_VISITED_ERROR, FETCH_RECENT_VISITED_SUCCESS } from "../actions/actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_RECENT_VISITED_SUCCESS: {
            return {
                ...state,
                properties: action.payload
            }
        }
        case FETCH_RECENT_VISITED_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
