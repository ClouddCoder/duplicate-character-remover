function InputScreen({ onHandleSubmit, onString, onHandleChange }) {
  return (
    <div id="user-input-container">
      <form className="row gy-2 gx-3 align-items-center" onSubmit={onHandleSubmit}>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">
            String
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="String"
            value={onString}
            onChange={onHandleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputScreen;
