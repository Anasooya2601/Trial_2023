function Form({ onValChange, formObject, onFormSubmit, onFileChange }) {
  return (
    <div className="row mb-4">
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="page-no"
          onChange={onValChange}
          value={formObject.pageno}
          name="pageno"
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          placeholder="date"
          className="form-control"
          onChange={onValChange}
          value={formObject.date}
          name="date"
        />
      </div>

      <div className="mb-3">
        <input
          type="time"
          className="form-control"
          placeholder="time"
          onChange={onValChange}
          value={formObject.time}
          name="time"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={onValChange}
          value={formObject.Title}
          name="Title"
        />
      </div>
      <div className="mb-3">
        <input
          // type="file"
          // className="form-control"
          // placeholder="https://example.com"
          // value={formObject.pdf}
          // onChange={onFileChange}

          // name="pdf"
          // require
          type="file"
          className="form-control"
          onChange={onFileChange}
          name="pdfFile"
        />
      </div>

      <div className="d-grid">
        <input
          type="submit"
          onClick={onFormSubmit}
          className="btn btn-success"
        />
      </div>
    </div>
  );
}
export default Form;
