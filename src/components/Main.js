import React, { useState } from 'react';
import termsData from '../components/Data.json';
import { Terms } from '../components/Terms';
import { SearchBar } from './SearchBar';
import Fuse from 'fuse.js';

function Main() {
  const [data, setData] = useState(termsData);
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    minMatchCharLength: 2,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [{ name: 'name', weight: 2 }, 'definition']
  };
  const fuse = new Fuse(termsData, options);

  const searchData = pattern => {
    if (!pattern) {
      setData(termsData);
      return;
    }
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-end">
            <h2 className="me-auto">Glossary</h2>
            <span className="text-danger pe-3 text-end">
              {Object.keys(data).length} results
            </span>
            <div className="col-md-4">
              <SearchBar
                placeholder="Search Glossary"
                onChange={e => searchData(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Terms results={data} />
      </div>
    </main>
  );
}

export default Main;
