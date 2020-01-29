import React from 'react';
import axios from 'axios';
import styled from "styled-components";


const Form = styled.div`
display: flex;
justify-content: space-evenly;
margin: 2%;
flex-flow: wrap;
`

const Card = styled.div`
dispaly:flex;
flex-direction: column;
border: black 2px solid;
border-radius: 10px;
margin: 1%;
padding: 1%;`



 export class Player extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            players: [],
        }
    }

    componentDidMount(){
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
            this.setState({
                players: res.data

            })
            
            })
    }
    render(){
        return (
            <Form>
                {this.state.players.map(player => <Card key={player.id}>
                    <h2>Name: {player.name}</h2>
                    <h2>Country: {player.country}</h2>
                    <h2>Searches: {player.searches}</h2>
                </Card>)}
            </Form>
        )
    }
}