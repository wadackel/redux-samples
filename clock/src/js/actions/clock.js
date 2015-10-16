import {parseTime} from "../utils/dates"


export const SYNC_DATE = "SYNC_DATE";

export function syncDate() {
  const time = parseTime(new Date());
  return {
    type: SYNC_DATE, ...time
  };
}