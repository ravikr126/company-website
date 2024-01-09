import React, { useState } from 'react';
import data from './data.json';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = data.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <strong>{result.name}</strong>: {result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;






const Homes = (e) =>{
    return(
  <h1>{e}</h1>
    )
    
  
  }