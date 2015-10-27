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


// import * as actionTypes from "../constants/ActionTypes"
//
//
// export default function github(state={
//   user: {
//     isFetching: false,
//     data: {}
//   },
//   stargazers: {
//     isFetching: false,
//     repositories: [],
//     pagination: {
//       total: 0,
//       current: 0
//     }
//   }
// }, action) {
//   switch( action.type ){
//     case actionTypes.FETCH_USER:
//       let user = Object.assign({}, state.user, {
//         isFetching: true
//       });
//       return Object.assign({}, state, {user});
//
//     case actionTypes.RECEIVE_USER:
//       let user = Object.assign({}, state.user, {
//         isFetching: false,
//         data: action.data
//       });
//       return Object.assign({}, state, {user});
//
//     case actionTypes.INVALIDATE_USER:
//       let user = Object.assign({}, state.user, {
//         isFetching: false,
//         data: {},
//         err: action.err
//       });
//       return Object.assign({}, state, {user});
//
//     // case FETCH_STARRED:
//     //   return Object.assign({}, state, {
//     //     isFetching: true
//     //   });
//     //
//     // case RECEIVE_STARRED:
//     //   return Object.assign({}, state, {
//     //     isFetching: false,
//     //     starred: action.starred
//     //   });
//     //
//     // case INVALIDATE_STARRED:
//     //   return Object.assign({}, state, {
//     //     isFetching: false,
//     //     starred: [],
//     //     err: action.arr
//     //   });
//
//     default:
//       return state;
//   }
// }