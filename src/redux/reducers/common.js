import { SET_BACKDROP_OPEN, SET_BACKDROP_CLOSED } from "../actions/actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case SET_BACKDROP_OPEN: {
            return {
                ...state,
                backdropOpen: true
            }
        }
        case SET_BACKDROP_CLOSED: {
            return {
                ...state,
                backdropOpen: false
            }
        }
        default:
            return state;
    }
}
