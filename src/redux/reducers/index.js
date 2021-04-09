import { combineReducers } from "redux";
import common from "./common";
import propertyList from "./propertyList";
import mostVisited from "./mostVisited";
import recentVisited from "./recentVisited";

export default combineReducers({
    propertyList,
    mostVisited,
    recentVisited,
    common
});
