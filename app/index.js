var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var App = require('./components/App');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello React App!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
