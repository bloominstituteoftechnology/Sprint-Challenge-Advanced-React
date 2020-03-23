import React from 'react';
import useAPI from './useAPI';

export default function withAPIHook(Component, url) {
	return (props) => {
		const data = useAPI(url);
		return <Component players={data} {...props} />;
	};
};