import React from 'react';
import useAPI from './playerAPI';

export default function Hook(Component, url) {
	return (props) => {
		const data = useAPI(url);
		return <Component players={data} {...props} />;
	};
};