import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default ({ player }) => {
    return (
        <div className='card' css={css`
            display: flex;
            align-items: center;
            border-radius: 5px;
            border: 2px solid black;
            padding: 10px 0;

            .card__image {
                background:blue;
                height: 60px;
                width: 60px;
                border: 0;
                border-radius: 100%;
                background: url('https://randomuser.me/api/portraits/med/women/${Math.floor(Math.random() * 100) + 1}.jpg') center center no-repeat;
                background-size: cover;
                display: block;
                margin: 0 15px;

            }

            .card__info p {
                font-family: sans-serif;
            }

            height: 100px;
            width: 300px;
            margin-bottom: 20px;

        `}>
           <div className='card__image'></div> 
            <div className='card__info'>
                <p className='card__info--name'>{player.name}</p>
                <p className='card__info--country'>{player.country}</p>
                <p className='card__info--searches'>{player.searches} Searches</p>
            </div> 
        </div>
    )
}
