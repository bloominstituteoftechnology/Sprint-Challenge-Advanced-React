import React, {useState, useEffect} from 'react';

 const players =[
     
 ]
const useSearch = () => {
  const [search, setSearch] = useState('');
  const handleChange = event => {
      setSearch(event.target.value)
  };
    
    return(
      <div>
        <input
        type="text"
        placeholder="Search"
        value={search}
        onChange ={handleChange}
        />
        </div>
    );
}

export default useSearch;