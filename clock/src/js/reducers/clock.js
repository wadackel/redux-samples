import {SYNC_DATE} from "../actions/clock"
import {parseTime} from "../utils/dates"


const initialState = parseTime(new Date());

export default function clock(state = initialState, action) {
  switch ( action.type ) {
    case SYNC_DATE:
      const {hour, minutes, seconds} = action;
      return Object.assign({}, state, {
        hour, minutes, seconds
      });
    default:
      return state;
  }
}