import { useEffect, useRef } from "react";
import generateRandomColors from "@/utils/generateRandomColors";
import checkDuplicates from "@/utils/checkDuplicates";
import useUniqueCharacterColors from "@/utils/hooks/useUniqueCharacterColors";
import useMessage from "@/utils/hooks/useMessage";
import useCharacters from "@/utils/hooks/useCharacters";

function DuplicatesScreen({ onString }) {
  const characters = useCharacters(onString.split(""));
  const uniqueCharacters = useCharacters([...new Set(onString.split(""))]);
  const { uniqueCharacterColors, setColors } = useUniqueCharacterColors();
  const { message, setCustomMessage } = useMessage();

  const charactersRef = useRef(characters.characters);
  const messageRef = useRef(message);

  useEffect(() => {
    setColors(generateRandomColors(uniqueCharacters.characters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the initial string has no duplicates, the message will be set to "There are no duplicates".
  useEffect(() => {
    const hasDuplicates = checkDuplicates(characters.characters, uniqueCharacters.characters);

    if (hasDuplicates) {
      hasDuplicates && setCustomMessage("There are no duplicates");
      messageRef.current = "There are no duplicates";
    }

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
        characters.setNewCharacters(newCharacters);

        const hasDuplicates = checkDuplicates(newCharacters, uniqueCharacters.characters);

        if (hasDuplicates && !messageRef.current) {
          setCustomMessage("All duplicates have been removed");
          messageRef.current = "All duplicates have been removed";
        }
      }
    };

    document.addEventListener("click", handleDeteleDuplicates);

    return () => {
      document.removeEventListener("click", handleDeteleDuplicates);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Remove the duplicates</h2>
      <section>
        {characters.characters?.map((char, index) => {
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
      {message && (
        <section>
          <h3 className="success-header">{message}</h3>
          <div>
            <span>{`Original string: ${onString}`}</span>
          </div>
          <div>
            <span>{`New string: ${characters.characters.join("")}`}</span>
          </div>
        </section>
      )}
    </div>
  );
}

export default DuplicatesScreen;
