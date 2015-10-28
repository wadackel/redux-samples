import moment from "moment"
import fetch from "isomorphic-fetch"
import {checkStatus, parseJSON} from "../utils/fetch-utils"
import * as actionTypes from "../constants/ActionTypes"
import * as constants from "../constants/Github"


// Search
export function requestSearch(keyword) {
  return {
    type: actionTypes.FETCH_SEARCH,
    keyword
  };
}

export function receiveSearch(repositories, pagination) {
  return {
    type: actionTypes.RECEIVE_SEARCH,
    repositories,
    pagination
  };
}

export function invalidateSearch(err) {
  return {
    type: actionTypes.INVALIDATE_SEARCH,
    err
  };
}

export function fetchSearch(keyword, nextPage) {
  return (dispatch) => {
    dispatch(requestSearch(keyword));
    return fetch(`${constants.API_ENDPOINT}/search/repositories?q=${keyword}&sort=stars&order=desc&page=${nextPage}&per_page=${constants.PER_PAGE}`)
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(receiveSearch(
          json.items,
          {
            total: json.total_count,
            current: parseInt(nextPage, 10)
          }
        ));
      })
      .catch((err) => {
        dispatch(invalidateSearch(err));
      });
  };
}