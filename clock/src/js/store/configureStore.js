import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import reducer from "../reducers/"

const createStoreWithMiddleware = applyMiddleware(
  logger()
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}