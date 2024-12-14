export default function appendToEachArrayValue(array, appendString) {
  for (const [index, value] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[index] = appendString + value;
  }

  return array;
}
