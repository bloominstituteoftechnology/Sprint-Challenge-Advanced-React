import React, { Component } from 'react'

import useFetch from '../hooks/useFetch';

import Card from './Card';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default class CardList extends Component {

    constructor() { 
        super();
        this.state = {
            players: [],
        }
    }

    async componentDidMount() {
        const [data] = await useFetch(`http://localhost:5000/api/players/`);
        this.setState({
            players: data,
        });
    }

    render() {
        const { players } = this.state;
        const { dark } = this.props;
        return (
            <div css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                
                .card {
                    background: ${dark ? "white" : "black"};
                    p {
                        color: ${dark ? "black" : "white"};
                    }
                }
            `}>
                {
                    players.map(p => p.id < 100 ? (<Card key={p.id} player={p} />) : null)
                }
            </div>
        )
    }
}
