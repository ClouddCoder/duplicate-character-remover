import { useState } from "react";

/**
 * Custom hook to check if a string has duplicates.
 * @returns {Object} - Object with the state and setState method.
 */
const useHasDuplicates = () => {
  const [hasDuplicates, setHasDuplicates] = useState(false);

  const setStringHasDuplicates = (characters, uniqueCharacters) => {
    if (characters.length === uniqueCharacters.length) {
      setHasDuplicates("The string provided has no duplicates!");
    }
  };

  return { hasDuplicates, setStringHasDuplicates };
};

export default useHasDuplicates;
