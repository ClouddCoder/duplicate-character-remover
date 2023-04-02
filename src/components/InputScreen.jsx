function InputScreen({ onHandleSubmit, onString, onHandleChange }) {
  return (
    <div className="container-md">
      <header className="text-center mb-5">
        <h2 className="fs-4">Duplicate Character Remover</h2>
        <h3 className="fs-5">Type the string you want to remove its duplicated characters.</h3>
      </header>
      <form
        className="row gy-2 gx-3 align-items-center justify-content-center"
        onSubmit={onHandleSubmit}
      >
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
