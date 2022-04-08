import React from "react";
import { Link } from "react-router-dom";

function MessageBoard() {
	return (
		<div>
			<h1>Message Board goes hereeeeeeeeee</h1>
			<Link to='/message-board/:comment_id'>Edit Comment here</Link>
		</div>
	);
}

export default MessageBoard;
