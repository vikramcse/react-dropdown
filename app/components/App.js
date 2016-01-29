var React = require('react');
var Button = require('./Button');
var ListItem = require('./ListItem');

var App = React.createClass({
	getInitialState () {
		return {
			display: false
		}
	},
	handleClick () {
		// when the button clicked the list should be shown
		this.setState({
			display: !this.state.display
		});
	},
	handleItem (item) {
		this.setState({
			display: false,
			title: item,
		});
	},
  render () {
  	var list = this.props.data.items.map(function (item, i) {
  		return <ListItem key={i}
  							 item={item}
  							 handleItemClick={this.handleItem} 
  							 selected={this.state.title === item ? "active": ""}/>
  	}.bind(this));

    return (
	    <div className="dropdown">
	      <Button 
	      		handleDropdownClick={this.handleClick} 
	      		className="btn-default" 
	      		title={this.state.title || this.props.data.title} />
	      <ul className={"dropdown-menu " + (this.state.display ? "show" : "")}>
	    		{list}
	      </ul>
	    </div>
    );
  }
});

module.exports = App;
