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
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Company Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            h2 {
              color: #333;
            }
            .company-card {
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 15px;
              margin-bottom: 15px;
            }
            .company-name {
              font-size: 1.5em;
              font-weight: bold;
              color: #007bff;
            }
            .tab-container {
              margin-top: 20px;
            }
            .tab-btn {
              cursor: pointer;
              background-color: #007bff;
              color: #fff;
              padding: 10px;
              margin-right: 10px;
              border: none;
              border-radius: 4px;
            }
            .tab-content {
              display: none;
              margin-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="company-card">
            <div class="company-name">${searchResult[0]['Company']}</div>
            <div class="tab-container">
              <button class="tab-btn" onclick="showTab('company-description')">Company Description</button>
              <button class="tab-btn" onclick="showTab('about-us')">About Us</button>
              <button class="tab-btn" onclick="showTab('contact-us')">Contact Us</button>
              <button class="tab-btn" onclick="showTab('website-link')">Website Link</button>
            </div>
            <div id="company-description" class="tab-content">
              <p>${searchResult[0]['Company descripion']}</p>
            </div>
            <div id="about-us" class="tab-content">
              <p>${searchResult[0]['about us']}</p>
            </div>
            <div id="contact-us" class="tab-content">
              <p>${searchResult[0]['Contact us']}</p>
            </div>
            <div id="website-link" class="tab-content">
              <p>Output Website Link: ${searchResult[0]['Output website link']}</p>
            </div>
          </div>
          <script>
            function showTab(tabId) {
              const tabs = document.querySelectorAll('.tab-content');
              tabs.forEach(tab => {
                tab.style.display = 'none';
              });
              document.getElementById(tabId).style.display = 'block';
            }
          </script>
        </body>
        </html>
      `);
  
      newWindow.document.close(); // Close the document to signal that the write is finished
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
