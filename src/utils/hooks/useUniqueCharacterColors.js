import { useState } from "react";

const useUniqueCharacterColors = () => {
  const [uniqueCharacterColors, setUniqueCharacterColors] = useState({});

  const setColors = (arr) => {
    setUniqueCharacterColors(arr);
  };

  return { uniqueCharacterColors, setColors };
};

export default useUniqueCharacterColors;
