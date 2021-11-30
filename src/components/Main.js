import React, { useState } from 'react';
import { termsData } from '../components/Data';
import { Terms } from '../components/Terms';
import { SearchBar } from './SearchBar';
import Fuse from 'fuse.js';

function Main() {
  const [data, setData] = useState(termsData);
  const fuse = new Fuse(termsData, {
    keys: ['name', 'definition']
  });

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
        console.log('match: ' + item);
        matches.push(item);
      });
      setData(matches);
      console.log('matches ' + JSON.stringify(termsData));
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row justify-content-between">
          <h2 className="col-md-8">Glossary</h2>
          <div className="col-12 col-md-4">
            <SearchBar
              placeholder="Search Glossary"
              onChange={e => searchData(e.target.value)}
            />
          </div>
        </div>
        <Terms results={termsData} />
      </div>
    </main>
  );
}

export default Main;
