export function truncNumber(number: number) {
  return Math.trunc(number * 100) / 100;
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function randomElement(array: number[]) {
  return array[Math.floor(Math.random() * array.length)];
}
