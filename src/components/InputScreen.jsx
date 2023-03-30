function InputScreen({ onHandleSubmit, onString, onHandleChange }) {
  return (
    <div id="user-input-container">
      <form id="user-input-form" onSubmit={onHandleSubmit}>
        <label htmlFor="string">Put the string</label>
        <input id="string" type="text" value={onString} onChange={onHandleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default InputScreen;
