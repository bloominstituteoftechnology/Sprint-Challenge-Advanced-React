import React from "react"

const PlayerCard = (props) => {

    return (
        <div className="card-container">
            <div className="card">
                <h2> {props.name} </h2>
                <h3> {props.country} </h3>
                <p> Searches: {props.searches} </p>
                
            </div>


        </div>

    )
}

export default PlayerCard