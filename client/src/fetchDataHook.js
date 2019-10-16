import axios from 'axios';

export const fetchDataHook = (APIendpoint) => {
    let data = [];
    axios.get(`${APIendpoint}`)
    .then(res => {
        data = res.data
    })
    .catch(err => console.log(err))

    return data;
}

// this custom hook is not used at this time but can be used in the future to fetch data from an external API