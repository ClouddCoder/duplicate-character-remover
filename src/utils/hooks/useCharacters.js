import { useState } from "react";

/**
 * Custom hook to save the characters of any string.
 * @param {Array} initialValue - Initial value of the state.
 * @returns {Object} - Object with the state and setState method.
 */
const useCharacters = (initialValue) => {
  const [characters, setCharacters] = useState(initialValue);

  const setNewCharacters = (newValue) => {
    setCharacters(newValue);
  };

  return { characters, setNewCharacters };
};

export default useCharacters;
