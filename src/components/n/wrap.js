import React from 'react'

export const wrap = function wrap(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.fetchData = this.handleChange.bind(this);
        }

        componentDidMount() {
            // DataSource.addChangeListener(this.handleChange);
            setTimeout(() => {
                this.setState({ data: 1, comments: [1, 2, 3, 5] });
            }, 2000)
        }

        componentWillUnmount() {
            // DataSource.removeChangeListener(this.handleChange);
        }

        handleChange(data = 0) {
            this.setState({
                data: 500 + data
            });
        }
        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return (<WrappedComponent fetchData={this.fetchData} {...this.state} {...this.props} />);
        }
    };
}