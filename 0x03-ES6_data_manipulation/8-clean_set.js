/**
 * Returns a string of all the set values that start with a specific string (startString).
 * @param {Set} set - The set of values to be processed.
 * @param {string} startString - The specific string that the values should start with.
 * @returns {string} - The resulting string with all the set values that match the startString.
 */
const cleanSet = (set, startString) => {
  // Create an array to store the matching values
  const str = [];

  // Check if the input arguments are valid
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  // Iterate through the set and find values that start with startString
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      // If a matching value is found, append the rest of the string to the result array
      str.push(item.slice(startString.length));
    }
  }

  // Return the resulting string with all the set values separated by '-'
  return str.join('-');
};

export default cleanSet;
