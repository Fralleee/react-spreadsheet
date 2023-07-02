export function numberToLetter(number: number): string {
  if (number < 0 || number > 25) {
    throw new Error("Index out of bounds. Should be between 0 and 25.");
  }

  return String.fromCharCode(65 + number);
}
