// Create a function named createInt8TypedArray that returns a new ArrayBuffer
// with an Int8 value at a specific position.
// It should accept three arguments: length (Number), position (Number), and value (Number).
// If adding the value is not possible the error Position outside range should be thrown.
export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const intArr = new Int8Array(buff);
  if (position > intArr.length) throw new Error('Position outside range');
  intArr[position] = value;
  return new DataView(buff);
}
