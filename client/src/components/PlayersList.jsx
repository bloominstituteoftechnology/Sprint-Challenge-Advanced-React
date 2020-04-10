import React from 'react';
import { Player } from './Player';

export const PlayersList = ({playersData}) => {
       
    return(
        <section className='players-section'>
            
          {playersData.map(pl =>{
             return(
                  <Player player={pl} key={pl.id}/>
            );
        })
    }
        </section>
    );
}