import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducer from "../reducers"


const configureStoreWithMiddleware = applyMiddleware(
  thunk,
  logger()
)(createStore);

export default function configureStore(initialState) {
  return configureStoreWithMiddleware(reducer, initialState);
}