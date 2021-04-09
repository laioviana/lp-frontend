import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const initialState = {
    propertyList: {
        properties: [],
        rowsPerPage: 5,
        totalElements: 0,
        page: 0
    },
    mostVisited: {
        data: []
    },
    recentVisited: {
        data: []
    },
    common: {
        backdropOpen: false
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

