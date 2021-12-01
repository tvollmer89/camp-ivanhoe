export const SearchBar = ({ onChange, placeholder }) => {
  return <div className="input-group">
      <input id="search-field" type="search" className="search form-control" name="term" onChange={onChange} placeholder={placeholder} />
      <button type="submit" className="btn btn-inline btn-search" aria-label="glossary-search-button">
        <i className="bi bi-search" />
      </button>
    </div>;
};
