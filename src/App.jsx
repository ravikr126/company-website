import React, { useState } from 'react';
import Papa from 'papaparse';

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Parsing CSV to JSON
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setJsonData(result.data);
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  };

  const handleSearch = () => {
    const result = jsonData.filter(
      (item) =>
        JSON.stringify(item)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
    setSearchResult(result);
  };

  const openNewTab = () => {
    const newWindow = window.open('about:blank', '_blank');
  
    if (newWindow) {
      newWindow.document.write(
        `<pre>${JSON.stringify(searchResult, null, 2)}</pre>`
      );
      newWindow.document.close();  // Close the document to signal that the write is finished
    } else {
      console.error('Unable to open new tab.');
    }
  };
  

  return (
    <div className="flex flex-col items-center mt-8">
      {/* File Upload */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="p-2 border border-gray-300"
      />

      {/* Search Bar and Button */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter search value"
          className="p-2 border border-gray-300"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Show JSON Data in a New Tab */}
      {searchResult.length > 0 && (
        <button
          className="mt-4 p-2 bg-green-500 text-white rounded"
          onClick={openNewTab}
        >
          Open Search Results in New Tab
        </button>
      )}
    </div>
  );
};

export default App;
