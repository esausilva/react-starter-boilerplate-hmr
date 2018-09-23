import React from 'react';
import PropTypes from 'prop-types';

let localeContext = React.createContext('locale');
function logProps(WrappedComponent) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
        }
        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props} />;
        }
    }
}

export class MChild extends React.PureComponent {
    send() {
        let key = Object.keys(this.props)[0]
        this.props.handler(key);
    }
    render() {
        let key = Object.keys(this.props)[0]
        console.log('render ', key)
        // console.log(key);
        let data = JSON.stringify(this.props)
        let children = this.props.children ? this.props.children({ name: key }) : null
        return (
            <localeContext.Consumer>{theme =>
                <div>{data} <button onClick={this.send.bind(this)}>{key} </button>
                    {theme}
                    {children}
                </div>
            }</localeContext.Consumer>);
    }
}
MChild.propTypes = {
    handler: PropTypes.func.isRequired
};
let SuperMChild = logProps(MChild)
let inner = ({ name }) => {
    return (<div>inner for child b= {name}</div>);
};
export class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: { i: 0 }, b: { i: 0 }, lastKey: 'a' }
        this.ha = this.handle.bind(this);
    }
    drop(e) {
        var data = parseInt(e.dataTransfer.getData("number"));
        this.handle('a', data)
        this.handle('b', data)
    }
    dropHack = (e) => {
        var data = parseInt(e.dataTransfer.getData("number"));
        this.handle('a', data)
        this.handle('b', data)
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

    handle(key, val) {
        this.state[key] = { i: this.state[key].i + (val ? val : 1) };
        this.state = Object.assign({}, this.state, { lastKey: key })
        this.setState(this.state);
    }
    render() {
        return (
            <div onDrop={this.dropHack} onDragOver={this.allowDrop}>
                {this.state.lastKey}
                <localeContext.Provider value={this.state.lastKey}>
                    <MChild a={this.state.a} handler={this.ha} />
                    <SuperMChild b={this.state.b} handler={this.ha} >
                        {inner}
                    </SuperMChild>
                </localeContext.Provider>
            </div>);
    }
}