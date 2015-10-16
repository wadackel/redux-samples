import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducer from "../reducers/"

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger()
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}