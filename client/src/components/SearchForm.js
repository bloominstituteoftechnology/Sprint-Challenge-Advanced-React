import React, {useState} from "react";
import Player from "./Player";

const SearchForm = props => {
    const [search, setSearch] = useState("");
    const handleChanges = e => {
        setSearch(e.target.value);
    };

    const players = props.data.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase())
        );
    const SearchPlayer = e => {
        {props.data.filter(player => player.name.toLowerCase().includes(search));
        }
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Search" value={search} onChange={handleChanges} />
                <button onClick={SearchPlayer} data-testid="searchButton">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;