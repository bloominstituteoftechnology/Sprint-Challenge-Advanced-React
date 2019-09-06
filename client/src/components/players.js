import React from 'react';
import data from '../data'
import axios from 'axios';

//  console.log(Object.entries(data));

class Players extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then((response) => {
            return(
                response.data
            )
        })
        .catch(error => {
            console.error('oops', error)
        });
    }

    render (){
        return <>
            <div>Hi</div>
        </>
    }
    
    



}

export default Players;