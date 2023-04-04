import { useEffect, useRef } from "react";
import Image from "next/image";
import generateRandomColors from "@/utils/generateRandomColors";
import checkDuplicates from "@/utils/checkDuplicates";
import useUniqueCharacterColors from "@/utils/hooks/useUniqueCharacterColors";
import useMessage from "@/utils/hooks/useMessage";
import useCharacters from "@/utils/hooks/useCharacters";
import styles from "./DuplicatesScreen.module.css";

function DuplicatesScreen({ onString, onSetString, onSetHasString }) {
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

          document.removeEventListener("click", handleDeteleDuplicates);
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
    <div className={styles.relativeContainer}>
      <button
        onClick={() => {
          onSetString("");
          onSetHasString(false);
        }}
        className={`btn btn-primary ${styles.back}`}
      >
        Back
      </button>
      <div>
        <header className="text-center mb-5">
          <h2 className="fs-3">Remove the duplicates</h2>
        </header>
        <section
          className={`d-flex flex-wrap gap-3 align-items-center justify-content-center ${styles.cards}`}
        >
          {characters.characters?.map((char, index) => {
            const color = uniqueCharacterColors[char];

            return (
              <div
                key={index}
                style={{ background: color }}
                className={`w-20 border border-dark d-flex flex-column justify-content-around align-items-center text-center ${styles.card}`}
              >
                <button
                  name="delete-duplicate-button"
                  id={`button-${index}`}
                  className={styles.button}
                >
                  <Image src="/trash.svg" alt="trash" width={30} height={30} />
                </button>
                <span>{char}</span>
              </div>
            );
          })}
        </section>
        {message && (
          <section className="mt-5 text-center">
            <h3 className="success-header fs-4">{message}</h3>
            <div>
              <span>{`Original string: ${onString}`}</span>
            </div>
            <div>
              <span>{`New string: ${characters.characters.join("")}`}</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default DuplicatesScreen;
