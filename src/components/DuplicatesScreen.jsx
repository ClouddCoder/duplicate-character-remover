function DuplicatesScreen({ characters }) {
  return (
    <div>
      <h2>Remove the duplicates</h2>
      <div>
        {characters?.map((char, index) => (
          <div key={index}>{char}</div>
        ))}
      </div>
    </div>
  );
}

export default DuplicatesScreen;
