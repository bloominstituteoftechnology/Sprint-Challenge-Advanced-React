import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePlayers(player, country, search-interest){
    const [players, setPlayers] useState([]);

    useEffect(() => {
        setPlayers([])

        axios.get(`http://localhost:5000/api/players`)
        .then(result => {
            setPlayers(result.data)
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [player, country, search-interest])

    return [players, setPlayers]
}