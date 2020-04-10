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
        return (
            <div css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            `}>
                {
                    players.map(p => <Card key={p.id} player={p} />)
                }
            </div>
        )
    }
}
