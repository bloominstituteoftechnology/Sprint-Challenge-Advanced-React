import React, {useState} from 'react'
import { Form } from 'semantic-ui-react'


function PlayerSearchForm({players}) {
    const playerCountries = players.map(player => {

        return {
            key:player.id,
            text:player.country,
            value:player.country.toLowerCase()
        }
    })


    // const countries = Object.values(players.countries)
    
    return (
        <Form style={{marginBottom:"20px"}}>
            <Form.Select 
                style={{width:"250px"}}
                label='Countries'
                options={playerCountries}
                placeholder="Player Countries"
            />
        </Form>
    )
}

export default PlayerSearchForm
