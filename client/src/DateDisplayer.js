import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
display: flex;
width: auto;
margin: 1px;
flex-wrap: wrap;

`


const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`


const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

`

const CardContent = styled.div

    `

padding-bottom: 1rem;
`

const MainContent = styled.div
    `
font-weight: bold;
padding-bottom: .3rem;
`
export default (props) => {

    // const [playerData, setPlayerData] = useState(props.playerData);
    const playerDataDIS = props.playerData
    console.log('props.playerData', props.playerData)
    console.log('playerDataDIS', playerDataDIS)
    if (props.playerData !== null) {
        return (

            <Container>
                {

                    props.playerData.map((player, index) => {
                        return (
                            <CardWrapper>
                                <CardHeader><CardHeading>{player.name}</CardHeading></CardHeader>
                                <CardContent><MainContent>Country</MainContent>{player.country}</CardContent>
                                <CardContent><MainContent>Searches</MainContent> {player.searches}</CardContent>
                            </CardWrapper>
                        )
                    })
                }
            </Container>
        )
    } else {
        return (<div>fefe</div>)
    }

}


