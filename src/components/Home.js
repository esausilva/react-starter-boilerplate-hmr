import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/dynamic">Navigate to Dynamic Page</Link>
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
