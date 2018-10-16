import React from 'react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <h1 className={h1}>
        react-starter-boilerplate-hmr
        </h1>
      {children}
      <div className="divider" />
      <p className={pullRight}>
        Made with <i className="fa  fa-heart" color="red" /> by Esau Silva
      </p>
    </div>
  );
};

export default Layout;
