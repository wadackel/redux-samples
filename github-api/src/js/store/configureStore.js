import {compose, createStore, applyMiddleware} from "redux"
import createHashHistory from "history/lib/createHashHistory"
import {reduxReactRouter} from "redux-router"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducer from "../reducers"


const configureStoreWithMiddleware = compose(
  applyMiddleware(
    thunk,
    logger()
  ),
  reduxReactRouter({
    createHistory: createHashHistory
  })
)(createStore);

export default function configureStore(initialState) {
  return configureStoreWithMiddleware(reducer, initialState);
}