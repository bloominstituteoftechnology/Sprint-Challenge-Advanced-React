import React from 'react';
import useColor from '../hooks/useColor'

const PlayerCard = (props) => {

    const[color, setColor] = useColor('color', true);

    const toggleMode = e =>{
        setColor(!color)
    };

    return(
        <div>

        <div key ={props.id} className={ color? 'cardClass' : 'bigCardClass'} onClick={toggleMode}>
            <h2>Name:{props.name}</h2>
            <p>Home Country:{props.country}</p>
            <p>Google Searches:{props.searches}</p>
        </div>
        </div>
    )
}
export default PlayerCard