import React from 'react';
import { List } from 'semantic-ui-react';

const Features = () => {
  const list = [
    'Semantic UI as the CSS Framework',
    'Hot Module Replacement',
    'CSS Autoprefixer',
    'CSS Modules with SourceMap',
    'Stage 1 Preset',
    'Webpack 2',
    '<a href="https://github.com/th0r/webpack-bundle-analyzer" target="_blank">Webpack Bundle Analyzer</a>. (Disabled by default)',
    "Take a look at <a href='https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json' target='_blank'>package.json</a>"
  ];
  return (
    <List>
      {list.map((item, idx) => (
        <List.Item key={idx}>
          <List.Icon name='checkmark' />
          <List.Content>
            <span dangerouslySetInnerHTML={{__html: item}} />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Features;