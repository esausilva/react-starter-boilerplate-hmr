import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import AsyncBundle from './AsyncBundle';

const AsyncHome = props => {
  return (
    <AsyncBundle load={() => import('./Home')}>
      {Home => <Home {...props} />}
    </AsyncBundle>
  );
};

const AsyncNoMatch = props => {
  return (
    <AsyncBundle load={() => import('./NoMatch')}>
      {NoMatch => <NoMatch {...props} />}
    </AsyncBundle>
  );
};

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
