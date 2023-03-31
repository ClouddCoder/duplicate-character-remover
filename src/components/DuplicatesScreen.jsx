import { useState, useEffect, useRef } from "react";
import generateRandomColors from "@/utils/generateRandomColors";
import useUniqueCharacterColors from "@/utils/hooks/useUniqueCharacterColors";
import useHasDuplicates from "@/utils/hooks/useHasDuplicates";

function DuplicatesScreen({ onString }) {
  const [characters, setCharacters] = useState(onString.split(""));

  const charactersRef = useRef(characters);

  const { uniqueCharacterColors, setColors } = useUniqueCharacterColors();
  const { hasDuplicates, setStringHasDuplicates } = useHasDuplicates();

  useEffect(() => {
    const uniqueCharacters = [...new Set(onString.split(""))];

    setColors(generateRandomColors(uniqueCharacters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleDeteleDuplicates = (e) => {
      if (e.target.name === "delete-duplicate-button") {
        const characterIndex = parseInt(e.target.id.split("-")[1]);

        const newCharacters = charactersRef.current.filter(
          (character, index) =>
            character !== e.target.nextElementSibling.textContent || index === characterIndex,
        );

        charactersRef.current = newCharacters;
        setCharacters(newCharacters);
      }
    };

    document.addEventListener("click", handleDeteleDuplicates);

    return () => {
      document.removeEventListener("click", handleDeteleDuplicates);
    };
  }, []);

  return (
    <div>
      <h2>Remove the duplicates</h2>
      <section>
        {characters?.map((char, index) => {
          const color = uniqueCharacterColors[char];

          return (
            <div key={index} style={{ background: color }}>
              <button name="delete-duplicate-button" id={`button-${index}`}>
                Delete
              </button>
              <span>{char}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default DuplicatesScreen;
