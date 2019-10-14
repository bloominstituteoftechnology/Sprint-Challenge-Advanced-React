import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

const Block = () => {


return (
  <div>
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
  <Container textAlign='center'>
  <Grid divided inverted stackable>
    <Grid.Column width={2}>
      <Header inverted as='h4' content='Features' />
      <List link inverted>
        <List.Item as='a'>Player Name</List.Item>
        <List.Item as='a'>Country of Origin</List.Item>
        <List.Item as='a'>Recent Searches</List.Item>
        <List.Item as='a'>More Data</List.Item>
      </List>
    </Grid.Column>
    <Grid.Column width={2}>
      <Header inverted as='h4' content='About' />
      <List link inverted>
        <List.Item as='a'>Home</List.Item>
        <List.Item as='a'>About</List.Item>
        <List.Item as='a'>Update Data</List.Item>
        <List.Item as='a'>Contact</List.Item>
      </List>
    </Grid.Column>
    <Grid.Column width={7}>
      <Header inverted as='h4' content='Player Trends by Search' />
      <p>
       This is a site where the womens soccer league data is logged and updated by google search trends.
      </p>
    </Grid.Column>
  </Grid>

  <Divider inverted section />
  <List horizontal inverted divided link size='small'>
    <List.Item as='a' href='#'>
      Site Map
    </List.Item>
    <List.Item as='a' href='#'>
      Contact Us
    </List.Item>
    <List.Item as='a' href='#'>
      Terms and Conditions
    </List.Item>
    <List.Item as='a' href='#'>
      Privacy Policy
    </List.Item>
  </List>
  </Container>
  </Segment>
  </div>
    );
};

export default Block;