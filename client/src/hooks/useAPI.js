import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAPI(url) {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/api${url}`)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => console.error(error))
		return () => { };
	}, [url])
	return data;
}