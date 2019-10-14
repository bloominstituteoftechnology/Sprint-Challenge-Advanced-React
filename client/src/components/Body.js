import React from 'react'
import Data from './Data'

function Body({ data }) {
    return (
        
    <tbody>
        {data.map(playerStats => {
            return <Data playerStats = { playerStats} key = {playerStats.name}
            />
        })} 
    </tbody>
    )
    }

export default Body
