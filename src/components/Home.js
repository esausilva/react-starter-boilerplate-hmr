import React from 'react';
import { Grid } from 'semantic-ui-react';

import Layout from './Layout';
import Features from './Features';
import Profile from './Profile';

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
