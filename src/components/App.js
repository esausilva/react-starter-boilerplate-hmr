import React from 'react';
import importedComponent from 'react-imported-component';
import Loading from './Loading';
import NoMatch from './NoMatch';
import { Parent } from './ParentChild';

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
      <Parent />
    </div>
  );
};

setTimeout(() => {
  less.modifyVars({
    '@primary': '#5B83AD',
    '@sec': '#D9EEF2'
  });
}, 10000);

export default App;
