import React from 'react';
import { List } from 'semantic-ui-react';

const Features = () => {
  const list = [
    'React 17',
    'React Fast Refresh',
    'React Router 5',
    'Webpack 5',
    'Semantic UI as the CSS Framework',
    'CSS Autoprefixer',
    'CSS Modules with SourceMap',
    'Stage 1 Preset',
    'Code splitting by Route and Vendor',
    '<a href="https://github.com/th0r/webpack-bundle-analyzer" target="_blank">Webpack Bundle Analyzer</a>',
    "Take a look at <a href='https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json' target='_blank'>package.json</a>",
  ];

  return (
    <List>
      {list.map((item, idx) => (
        <List.Item key={idx}>
          <List.Icon name="checkmark" />
          <List.Content>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Features;
