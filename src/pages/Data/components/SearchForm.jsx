import React, { useState, useContext } from 'react';
import { DataContext } from './DataContext.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Search = () => {
  const [input, setInput] = useState('');
  const { updateSelection } = useContext(DataContext);
  const { listData } = useContext(DataContext);
  const { dataHolderRef } = useContext(DataContext);
  const navigate = useNavigate(); // Initialize useNavigate




  // Function to handle input changes and search the list
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Filter the list based on the input
  const filteredList = input.length > 0 
    ? listData.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
    : [];

  // Function to handle selecting an item from the list
  const handleSelectItem = (type, id) => {
    console.log('Selected:', type, id);
    updateSelection(type, id);
    setInput(''); // Clear the input after selection
    navigate(`/data/${type}/${id}`);
    if (dataHolderRef && dataHolderRef.current) {
      dataHolderRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
<div className="relative w-[50%]">
    <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search regions, districts, or cities..."
        className="w-full p-2 border border-gray-300 rounded-md"
    />
    <div className="absolute  w-full bg-white lg:max-h-24 max-h-20 overflow-y-auto shadow-lg mt-1 z-10 border border-gray-200">
        {filteredList.length > 0 ? (
            filteredList.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleSelectItem(item.type, item.IDN)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                    {item.name} ({item.SKType})
                </div>
            ))
        ) : (
            <div className="p-2 text-gray-500">No results found</div>
        )}
    </div>
</div>
  );
};

export default Search;
