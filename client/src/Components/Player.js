import React from 'react';

import { List } from 'semantic-ui-react';

const Player = props => {
    return (
        <div>
            <List>
                <List.Item>
                    <List.Header as='ul'>Player: {props.name}</List.Header>
                        <List.List as='li'>Country: {props.country}</List.List>
                        <List.List as='li'># of Google Searches: {props.searches}</List.List>
                </List.Item>
            </List>
        </div>
    );
};

export default Player;