var React = require('react');

var ListItem = React.createClass({
	handleClick () {
		this.props.handleItemClick(this.props.item);
	},
  render () {
    return (
			<li className={this.props.selected}>
				<a onClick={this.handleClick}>
						{this.props.item}
				</a>
			</li>
    );
  }
});

module.exports = ListItem;
