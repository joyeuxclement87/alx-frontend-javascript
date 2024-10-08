// Creating a function named cleanSet that returns a string of all the set values
// that start with a specific string (startString).
// It accepts two arguments: a set (Set) and a startString (String).
// When a value starts with startString you only append the rest of the string.
// The string contains all the values of the set separated by -.

export default function cleanSet(set, startString) {
  const str = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      str.push(s.slice(startString.length));
    }
  });
  return str.join('-');
}
