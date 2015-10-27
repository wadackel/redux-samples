import {combineReducers} from "redux"
import {routerStateReducer} from "redux-router"
import github from "./github"


const reducer = combineReducers({
  router: routerStateReducer,
  github
});

export default reducer;