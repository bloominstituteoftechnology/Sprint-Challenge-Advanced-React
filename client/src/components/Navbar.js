import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Player Stats',
        icon: 'fas fa-baseball-ball'
    }

    static propTypes= {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    
    render() {
        return (
            <Navigation>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                </h1>

            </Navigation>
        )
    }
}

const Navigation = styled.nav`
    width: 50%;
    margin: 0 auto;
    background-color:red;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    padding: 5px;
    }
`

export default Navbar

