import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Import the CSS file

const jsonData = [
    {
        "name": "",
        "pbId": "12",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:00:46",
        "date": "2024-03-17"
    },
    {
        "name": " vxx",
        "pbId": "546",
        "reffId": null,
        "designation": "cxvxv",
        "division": "xxx",
        "phoneNo": "56232",
        "programCode": "5455",
        "time": "13:03:26",
        "date": "2024-03-17"
    },
    {
        "name": "CHIRAG",
        "pbId": "753",
        "reffId": null,
        "designation": "dfvdGH",
        "division": "hgh",
        "phoneNo": "hghg",
        "programCode": "ghg",
        "time": "13:03:26",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "12",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "156",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "trinadh",
        "pbId": "159",
        "reffId": null,
        "designation": "sdfsfJJH",
        "division": "JHJHJ",
        "phoneNo": "JHJH",
        "programCode": "JHJH",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "456",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "46119",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": " vxx",
        "pbId": "546",
        "reffId": null,
        "designation": "cxvxv",
        "division": "xxx",
        "phoneNo": "56232",
        "programCode": "5455",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "CHIRAG",
        "pbId": "753",
        "reffId": null,
        "designation": "dfvdGH",
        "division": "hgh",
        "phoneNo": "hghg",
        "programCode": "ghg",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "sfsdds",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "16:16:45",
        "date": "2024-03-17"
    },
    {
        "name": "Nishi Pal",
        "pbId": "46125-44",
        "reffId": null,
        "designation": "sgjdhj",
        "division": "1",
        "phoneNo": "8707700126",
        "programCode": "56888",
        "time": "19:00:10",
        "date": "2024-03-17"
    },
    {
        "name": "Nishi Pal",
        "pbId": "46125-44",
        "reffId": null,
        "designation": "sgjdhj",
        "division": "1",
        "phoneNo": "8707700126",
        "programCode": "56888",
        "time": "19:00:49",
        "date": "2024-03-17"
    }
    // Add the rest of your JSON data here
];

function SearchBar({ onSelectProgramCode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // New state to control displaying search results

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setShowResults(false); // Hide search results if search term is empty
      return;
    }

    // Filter the jsonData based on the search term
    const filteredResults = jsonData.filter(user => user.programCode.includes(searchTerm));

    setSearchResults(filteredResults);
    setShowResults(true); // Show search results after filtering data
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectOption = (programCode) => {
    setSearchTerm(programCode);
    setShowResults(false); // Hide search results after selecting an option
    onSelectProgramCode(programCode);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="input-field"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setShowResults(true)} // Show results when input is focused
      />
      {showResults && !loading && (
        <ul className="result-list">
          {searchResults.map((user, index) => (
            <li 
              key={index} 
              onClick={() => handleSelectOption(user.programCode)}
            >
              {user.programCode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
