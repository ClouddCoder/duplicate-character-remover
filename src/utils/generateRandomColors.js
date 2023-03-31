/**
 * Generates random colors for each character in the string provided.
 * @param {Array} characters - Characters of the string provided.
 * @returns {Object} - Object with characters as keys and random colors as values.
 */
const generateRandomColors = (characters) => {
  let uniqueCharacterColors = {};

  for (const character of characters) {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

    uniqueCharacterColors = { ...uniqueCharacterColors, [character]: color };
  }

  return uniqueCharacterColors;
};

export default generateRandomColors;
