// import fetch from "isomorphic-fetch"
// import {
//   FETCH_USER,
//   RECEIVE_USER,
//   INVALIDATE_USER,
//   FETCH_STARRED,
//   RECEIVE_STARRED,
//   INVALIDATE_STARRED
// } from "../constants/ActionTypes"
//
//
// const API_ENDPOINT = "https://api.github.com";
//
// function checkStatus(res) {
//   if( res.status >= 200 && res.status < 300 ){
//     return res;
//   }else{
//     let error = new Error(res.statusText);
//     error.response = res;
//     throw error;
//   }
// }
//
// function parseJSON(res) {
//   return res.json();
// }
//
//
// export function requestUser(userName) {
//   return {
//     type: FETCH_USER,
//     userName
//   }
// }
//
//
// export function receiveUser(user) {
//   return {
//     type: RECEIVE_USER,
//     user
//   }
// }
//
//
// export function invalidateUser(err) {
//   return {
//     type: INVALIDATE_USER,
//     err
//   }
// }
//
//
// export function fetchUser(userName) {
//   return (dispatch) => {
//     dispatch(requestUser(userName));
//     return fetch(`${API_ENDPOINT}/users/${userName}`)
//       .then(checkStatus)
//       .then(parseJSON)
//       .then((json) => {
//         dispatch(receiveUser(json));
//       })
//       .catch((err) => {
//         dispatch(invalidateUser(err));
//       });
//   };
// }
//
//
// export function requestStarred(userName) {
//   return {
//     type: FETCH_STARRED,
//     userName
//   };
// }
//
//
// export function receiveStarred(starred) {
//   return {
//     type: RECEIVE_STARRED,
//     starred
//   };
// }
//
//
// export function invalidateStarred(err) {
//   return {
//     type: INVALIDATE_STARRED,
//     err
//   };
// }
//
//
// export function fetchStarred(userName) {
//   return (dispatch) => {
//     dispatch(requestStarred(userName));
//     return fetch(`${API_ENDPOINT}/users/${userName}/starred`)
//       .then(checkStatus)
//       .then(parseJSON)
//       .then((json) => {
//         dispatch(receiveStarred(json));
//       })
//       .catch((err) => {
//         dispatch(invalidateStarred(err));
//       });
//   };
// }