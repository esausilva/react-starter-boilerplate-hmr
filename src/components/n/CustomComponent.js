import React from 'react'

class CustomComponent extends React.Component {

      constructor(props) {
            super(props);
            this._fetchData = this.fetchData.bind(this);
      }

      fetchData() {
            this.props.fetchData(75);
      }

      componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
      }
      render() {
            var data = JSON.stringify(this.props);
            return (
                  <div>
                        <button onClick={this._fetchData} className="btn btn-success">Fetch</button>
                        <h1>CustomComponent: Hello world {data}</h1>
                  </div >
            );
      }
}
export default CustomComponent;