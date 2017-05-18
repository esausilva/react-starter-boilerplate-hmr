import React from 'react';
import { 
  Header, 
  Container, 
  Divider, 
  Icon, 
  Grid 
} from 'semantic-ui-react';
import Features from './Features';
import Profile from './Profile';

import { pullRight } from './app.css';

const App = () => {
  return (
    <Container>
      <Header as='h1'>react-starter-boilerplate-hmr</Header>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Features />
          </Grid.Column>
          <Grid.Column>
            <Profile />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <p className={pullRight}>
        Made with <Icon name='heart' color='red' /> by Esau Silva
      </p>
    </Container>
  );
}

export default App;