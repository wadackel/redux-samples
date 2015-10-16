export function parseTime(date=new Date()) {
  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}