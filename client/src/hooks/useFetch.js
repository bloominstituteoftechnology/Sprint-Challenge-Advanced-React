import React from 'react';

import axios from 'axios';

async function useFetch(endpoint) {
    const fetch = await axios.get(endpoint)
    .then(resp => {
            const { data } = resp;
            return [data, resp];
        })
        .catch(err => {
            console.error(err);
            return [null, null];
        })
    
    return [fetch[0], fetch[1]];
}
export default useFetch;