import React, { Component } from 'react';
import { func } from 'prop-types';

import Loading from './Loading';

class AsyncBundle extends Component {
  state = {
    mod: null
  };

  static propTypes = {
    load: func
  };

  componentWillMount() {
    this.loadModule(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.loadModule(nextProps);
    }
  }

  loadModule = props => {
    this.setState({ mod: null });
    props.load().then(mod => this.setState({ mod: mod.default }));
  };

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : <Loading />;
  }
}

export default AsyncBundle;
