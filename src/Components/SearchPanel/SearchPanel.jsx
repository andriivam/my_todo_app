import React from 'react';
import './SearchPanel.css';

export default function SearchPanel({ search, handleSearch }) {

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        handleSearch(inputValue);
    }

    return (
        <div>
            <input className=" form-control search-input" type="text" placeholder="type to search" value={search} onChange={handleInputChange} />
        </div>
    )
}
