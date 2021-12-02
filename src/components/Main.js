import React, { useState } from 'react';
import termsData from '../components/Data.json';
import { Terms } from '../components/Terms';
import { SearchBar } from './SearchBar';
import FilterLink from './FilterLink';
import Fuse from 'fuse.js';
import { FilterLink } from './FilterLink';

/*----------  Filter Nav  ----------*/
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Main() {
  window.onload = event => {
    document.getElementById('glossary-nav').firstChild.firstChild.click();
  };
  /*----------  Text Search  ----------*/
  const [data, setData] = useState(termsData);
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 2,
    // location: 0,
    useExtendedSearch: true,
    // distance: 100,
    ignoreFieldNorm: true,
    threshold: 0.2,
    ignoreLocation: true,
    keys: [{ name: 'name', weight: 2 }, 'definition']
  };
  const fuse = new Fuse(termsData, options);

  const searchList = (pattern, filter) => {
    if (!pattern) {
      setData(termsData);
      return;
    }
    console.log('pattern: ' + pattern);
    const result = !filter
      ? fuse.search(pattern)
      : fuse.search({ $and: [{ name: pattern }] });
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

  const clearSearch = () => {
    searchList();
    console.log('search cleared');
  };

  const clearFilters = () => {
    // clear filter links
    const listContainer = document.getElementById('glossary-nav');
    listContainer
      .querySelectorAll('li')
      .forEach(li => li.firstChild.classList.remove('active'));
  };

  const handleInput = e => {
    clearFilters();
    searchList(e.target.value);
  };

  const handleClick = e => {
    clearFilters();
    clearSearch();
    e.preventDefault();
    e.target.classList.add('active');
    searchList(`^${e.target.textContent}`, true);
    console.log(`The ${e.target.textContent} was clicked.`);
  };

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <SearchBar
          resultCount={Object.keys(data).length}
          placeholder="Search Glossary"
          onChange={handleInput}
        />
        <div className="row">
          <ul
            id="glossary-nav"
            className="nav nav-pills py-2 justify-content-center">
            {alphabet.map(letter => {
              return (
                <FilterLink
                  key={letter}
                  letter={letter}
                  onClick={handleClick}
                />
              );
            })}
          </ul>
        </div>
        <Terms results={data} />
      </div>
    </main>
  );
}

export default Main;
