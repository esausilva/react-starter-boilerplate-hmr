// import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// if (module.hot) module.hot.accept();

//const render = (Component) =>
// ReactDOM.render(<Component />, document.getElementById('root'));

// render(hot(App));

/*
 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

 */
