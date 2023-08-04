/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the new ArrayBuffer.
 * @param {Number} position - The position where the Int8 value will be placed.
 * @param {Number} value - The Int8 value to be added.
 * @returns {DataView} - The DataView representing the new ArrayBuffer.
 * @throws {Error} - If the position is outside the range of the ArrayBuffer.
 */
const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer's data
  const data = new DataView(buffer);

  // Check if the position is within the range of the ArrayBuffer
  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position in the DataView
  data.setInt8(position, value);

  // Return the DataView representing the new ArrayBuffer
  return data;
};

export default createInt8TypedArray;
