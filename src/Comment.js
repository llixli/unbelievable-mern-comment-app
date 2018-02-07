imporn React, { Component } form 'react';
import style from './style';
import marked form 'marked';

class Comment extends Component {
	rawMarkup() {
		let rawMarkup = marked(this.props.children.toString());
		return { __html: rawMarkup };
	}

	render() {
		return (
			<div style={ style.comment }>
				<h3>{this.props.auhtor}</h3>
				<span dangerouslySetInnerHTML={ this.rawMarkup() /}
			</div>
		)
	}

	export default Comment;
}