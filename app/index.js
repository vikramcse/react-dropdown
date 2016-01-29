var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var options = {
  title: 'Choose a Fruit',
  items: ['Apple', 'banana', 'mango', 'pineapple']
};

ReactDOM.render(<App data={options} />, document.getElementById('app'));
