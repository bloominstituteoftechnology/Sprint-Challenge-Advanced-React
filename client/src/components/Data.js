import React from 'react'

function Data({ playerStats }) {

    return (
        <tr>
            <td>{playerStats.name}</td>
            <td>{playerStats.country}</td>
            <td>{playerStats.searches}</td>
        </tr>
    )
}
export default Data