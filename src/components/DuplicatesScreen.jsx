import { useState } from "react";

function DuplicatesScreen({ onString }) {
  const [characters, setCharacters] = useState(onString.split(""));

  return (
    <div>
      <h2>Remove the duplicates</h2>
      <div>
        {characters?.map((char, index) => (
          <div key={index}>
            <button>Delete</button>
            <span>{char}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DuplicatesScreen;
