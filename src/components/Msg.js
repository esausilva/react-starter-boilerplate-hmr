import React from 'react';
import styles from './Msg.css';
let translations = { 'a.b': 'Tytuł' }
export default class Msg extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef();
  }
  change() {
    this.setState({ edit: true });
  }
  save(code) {
    this.setState({ edit: false });
    translations[code] = this.input.current.value;
  }
  render() {
    if (this.state && this.state.edit) {
      return (<div><input ref={this.input} defaultValue={translations[this.props.code]} /> <a onClick={this.save.bind(this, this.props.code)}><i className="fa fa-floppy-o" aria-hidden="true"></i></a></div>)
    }
    return (<div className={styles.showhim}>{translations[this.props.code]} <a onClick={this.change.bind(this)}><i className={"fa fa-pencil " + styles.edition} aria-hidden="true"></i></a></div>)
  }
}
