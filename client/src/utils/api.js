import axios from "axios";
import { useState, useEffect } from "react";

export function usePlayerData(country) {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
        setSearches([]);

        axios 
        .get(`http://localhost:5000/api/players`)
        .then(result => {
            console.log(result.data);
            setSearches(result.data);
        })
        .catch(error => {
            console.log("error:", error);
        });
    }, [country]);

    return [searches, setSearches];
}