import React from 'react'

function Body({ data }) {
    return (
    <tbody>
        {data.map(playerStats => {
            return <div><tr>
            <td>{playerStats.name}</td>
            <td>{playerStats.country}</td>
            <td>{playerStats.searches}</td>
        </tr></div>
        })}
    </tbody>
    )
    }

export default Body