var React = require('react');

var Button = React.createClass({
	handleClick () {
		this.props.handleDropdownClick();
	},
  render () {
    return (
	    <div>
	      <button onClick={this.handleClick} className={"btn " + this.props.className}>
	      	{this.props.title}
	      	<span className="caret"></span>
	      </button>
	    </div>
    );
  }
});

module.exports = Button;
