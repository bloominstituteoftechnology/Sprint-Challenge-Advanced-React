import React from 'react'

function Body({ playerData}) {
    return
    <tbody>
        {playerData.map(playerStats => {
            return <div><tr>
            <td>{playerStats.name}</td>
            <td>{playerStats.country}</td>
            <td>{playerStats.searches}</td>
        </tr></div>
        })}
    </tbody>
}

export defaults Body