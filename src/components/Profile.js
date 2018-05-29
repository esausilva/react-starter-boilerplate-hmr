import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src="https://avatars3.githubusercontent.com/u/9492978?v=3"
        />
        <Card.Header>Esau Silva</Card.Header>
        <Card.Description>
          Full Stack Software Engineer and avid Brazilian Jiu-Jitsu
          practitioner.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://twitter.com/_esausilva" target="_blank">
          <Icon name="twitter" />
          Twitter
        </a>{' '}
        <a href="https://github.com/esausilva" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
