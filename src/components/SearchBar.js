export const SearchBar = ({ resultCount, onChange, placeholder }) => {
  return (
    <div className="d-flex flex-wrap align-items-end">
      <h2 className="me-auto">Glossary</h2>
      <span className="text-danger pe-3 text-end">
        {resultCount} results
      </span>
      <div className="col-md-4">
        <div className="input-group">
          <input
            id="search-field"
            type="search"
            className="search form-control"
            name="term"
            onChange={onChange}
            placeholder={placeholder}
          />
          <button
            type="submit"
            className="btn btn-inline btn-search"
            aria-label="glossary-search-button">
            <i className="bi bi-search" />
          </button>
        </div>
      </div>
    </div>
  );
};
