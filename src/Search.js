import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';

const Search = () => {
  const { data, setSelectedItems } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSelectedItems([]);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by title or brand" />
      <p>{filteredData.length} results found.</p>
    </div>
  );
};

export default Search;
