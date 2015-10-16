export function zeroPadding(number, length=1) {
  return (Array(length).join("0") + number).slice(-length);
}