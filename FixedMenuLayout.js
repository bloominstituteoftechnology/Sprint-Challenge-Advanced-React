import React from 'react';
import {  Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
//adding semantic ui bootstrap menu
const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          Womens Soccer Player Feed
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Menu'>
          <Dropdown.Menu>
            <Dropdown.Item>Trends</Dropdown.Item>
            <Dropdown.Item>Players</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>More</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Data</span>
              <Dropdown.Menu>
                <Dropdown.Item>By Country</Dropdown.Item>
                <Dropdown.Item>By Popularity</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)

export default FixedMenuLayout;