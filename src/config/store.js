import {applyMiddleware, combineReducers , createStore} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";

import list from "./../reducers/listReducers";
import singleItem from "./../reducers/singleItemReducers";
import description from "./../reducers/descriptionReducers";

export default createStore(combineReducers({list , singleItem , description}), {},applyMiddleware(thunk,promise));