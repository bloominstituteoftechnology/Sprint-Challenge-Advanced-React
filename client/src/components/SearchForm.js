import React, { useState } from 'react';
import Player from './Player';

const SearchForm = props => {
    const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const players = props.data.filter(person =>
        person.name.toLowerCase().includes(search.toLocaleLowerCase())
        );

    const searchPlayer = e => {
        {
            props.data.filter(player => player.name.toLowerCase().includes(search));
        }
    };

    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='Search'
                    value={search}
                    onChange={handleChange}
                />
                <button onClick={searchPlayer}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;