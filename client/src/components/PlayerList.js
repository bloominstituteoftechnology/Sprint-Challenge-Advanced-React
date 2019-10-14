import React from 'react'
import styled from 'styled-components';
import Headings from './Headings';
import Body from './Body'


const PlayerList = (props ) => {
    return (
        <Table>
            <Headings />
            <Body data = { props.data} />
        </Table>
    )
}

export default PlayerList

const Table = styled.table`
    width: 100%;
    box-shadow: 1px 1px 5px;
    border-radius: 5px;
    td, th {
        box-shadow: 1px 1px 5px;
        border-radius: 5px;
    padding: 8px;
    }
    tr:nth-child(even) {
        background: rgb(142,214,199);
        background: -moz-linear-gradient(90deg, rgba(142,214,199,1) 0%, rgba(29,125,253,1) 77%, rgba(69,176,252,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(142,214,199,1) 0%, rgba(29,125,253,1) 77%, rgba(69,176,252,1) 100%);
        background: linear-gradient(90deg, rgba(142,214,199,1) 0%, rgba(29,125,253,1) 77%, rgba(69,176,252,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ed6c7",endColorstr="#45b0fc",GradientType=1);
    }
    tr:nth-child(odd) {
        background: rgb(206,142,214);
        background: -moz-linear-gradient(90deg, rgba(206,142,214,1) 0%, rgba(253,29,65,1) 77%, rgba(252,136,69,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(206,142,214,1) 0%, rgba(253,29,65,1) 77%, rgba(252,136,69,1) 100%);
        background: linear-gradient(90deg, rgba(206,142,214,1) 0%, rgba(253,29,65,1) 77%, rgba(252,136,69,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce8ed6",endColorstr="#fc8845",GradientType=1);
    }
`

