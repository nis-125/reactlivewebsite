import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Import the CSS file

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // New state to control displaying search results

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setShowResults(false); // Hide search results if search term is empty
      return;
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.2.119:8090/hal-hma-attendance/getDataByFilter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pbId: '',
            date: '',
            programCode: ''
          })
        });

        const data = await response.json();
        console.log("Data",data);
        setSearchResults(data);
        setLoading(false);
        setShowResults(true); // Show search results after fetching data
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectOption = (name) => {
    setSearchTerm(name);
    setShowResults(false); // Hide search results after selecting an option
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="input-field"
        placeholder="Search by PB-NO.."
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setShowResults(true)} // Show results when input is focused
      />
      {showResults && !loading && (
        <ul className="result-list">
          {searchResults.map((user, index) => (
            <li 
              key={index} 
              onClick={() => handleSelectOption(user.name)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
