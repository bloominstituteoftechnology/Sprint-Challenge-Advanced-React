import React from 'react';
import axios from 'axios'

class Players extends React.Component{
    constructor(){

       super();
    this.state = {
        player: [],
    } 
}

    componentDidMount(){
        axios.get(' https://googletrends.github.io/data/')
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }    

    render(){
        return(
            <div>Test</div>
        )
    }


}
export default Players;