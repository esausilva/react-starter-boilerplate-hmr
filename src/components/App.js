import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './Loading';

const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

const AsyncNoMatch = Loadable({
  loader: () => import('./NoMatch'),
  loading: Loading
});

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
