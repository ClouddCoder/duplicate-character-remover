import { useState } from "react";

/**
 * Custom hook to save the colors of each character.
 * @returns {Object} - Object with the state and setState method.
 */
const useUniqueCharacterColors = () => {
  const [uniqueCharacterColors, setUniqueCharacterColors] = useState({});

  const setColors = (arr) => {
    setUniqueCharacterColors(arr);
  };

  return { uniqueCharacterColors, setColors };
};

export default useUniqueCharacterColors;
