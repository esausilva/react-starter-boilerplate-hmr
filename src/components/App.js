import React from 'react';
import importedComponent from 'react-imported-component';
import Loading from './Loading';
import NoMatch from './NoMatch';
import { Parent } from './ParentChild';
import Msg from './Msg';
import all from '../detectmobilebrowsers'
import CustomComponent from './n/CustomComponent'
import { wrap } from './n/wrap'

let Wrapped = wrap(CustomComponent);

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
      <Msg code="a.b" />
      <Wrapped />
      <Loading />
      <AsyncDynamicPAge />
      <Parent />
    </div>
  );
};

setTimeout(() => {
  less.modifyVars({
    '@primary': '#5B83AD',
    '@sec': '#D9EEF2'
  });
}, 5000);

export default App;
