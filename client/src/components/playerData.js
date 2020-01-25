import React, { useState,useEffect } from 'react';
import axios from 'axios'

const PlayerData = () => {
    const [player, setPlayer] = useState([])

    useEffect(() => {
        
            axios.get('http://localhost:5000/api/players')
        .then(res => {
            setPlayer(res.data);
            
        }).catch(error => {
            console.error('Server Error', error);
          });

        
        
    })


    return (
        <>
        <div className='player-container'>
        {player.map(player => {
            return (
            <div className='container'>    
            <h2>{player.name}</h2>
            <h3>{player.country}</h3> 
            </div>
            )
        })}
        </div>


        </>
    )
}

export default PlayerData;
