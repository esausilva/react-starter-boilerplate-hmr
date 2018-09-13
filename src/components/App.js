import React from 'react';
import importedComponent from 'react-imported-component';

import Loading from './Loading';
import NoMatch from './NoMatch';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);



const App = () => {
  return (
    <div>
      <AsyncDynamicPAge />
      <Loading />
    </div>
  );
};

export default App;
