import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = () => {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/players`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log('error', err);
			});
	}, []);

	return [ data, setData ];
};
