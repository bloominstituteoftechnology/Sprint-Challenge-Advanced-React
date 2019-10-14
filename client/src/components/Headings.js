import React from 'react'
import styled from 'styled-components';

function Headings() {
    return (
        <Head>
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Total</th>
            </tr>
        </Head>
    )
}

export default Headings

const Head = styled.nav`
    width: 100%;
    margin: 0 auto;
    background-color:red;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    padding: 5px;
    }
`