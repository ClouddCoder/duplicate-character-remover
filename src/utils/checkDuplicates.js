/**
 * Check if the string provided has duplicates.
 * @param {Array} characters - Characters of the string provided.
 * @param {Array} uniqueCharacters - Unique characters of the string provided.
 * @returns {Boolean} - True if the string has no duplicates, false otherwise.
 */
const checkDuplicates = (characters, uniqueCharacters) =>
  characters.length === uniqueCharacters.length;

export default checkDuplicates;
