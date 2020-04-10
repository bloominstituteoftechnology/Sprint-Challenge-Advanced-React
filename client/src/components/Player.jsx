import React from 'react';

export const Player = ({player}) => {

    return (
        <div className='player-info'>
            <div>
                  <p>Name : {player.name}</p>
                  <p>Country : {player.country}</p>
                  <p>Searches : {player.searches}</p>
            </div>
           </div>
    );
}