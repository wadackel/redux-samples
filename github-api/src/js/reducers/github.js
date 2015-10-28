import * as actionTypes from "../constants/ActionTypes"


const initialState = {
  trendings: {
    isFetching: false,
    data: {}
  },
  search: {
    isFetching: false,
    repositories: [],
    pagination: {
      total: 0,
      current: 0
    }
  }
};

export default function github(state=initialState, action) {
  switch( action.type ){
    case actionTypes.FETCH_SEARCH:
      return Object.assign({}, state, {
        search: Object.assign({}, state.search, {
          isFetching: true
        })
      });

    case actionTypes.RECEIVE_SEARCH:
      return Object.assign({}, state, {
        search: Object.assign({}, state.search, {
          isFetching: false,
          repositories: action.repositories,
          pagination: action.pagination
        })
      });

    case actionTypes.INVALIDATE_SEARCH:
      return Object.assign({}, state, {
        search: Object.assign({}, state.search, {
          isFetching: false,
          repositories: [],
          pagination: {
            total: 0,
            current: 0
          }
        })
      });

    default:
      return state;
  }
}