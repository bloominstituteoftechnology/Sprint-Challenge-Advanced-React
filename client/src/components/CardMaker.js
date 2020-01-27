
import React from 'react'
import '../index.css'

export default function CardMaker(props) {

    if (!props.player) {return null}
    return (
        <div className="soccerCard">
            <p>Name: {props.player.name}</p>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}