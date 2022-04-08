import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<Link to='/practice'>practice here</Link>
			<Link to='/message-board'>chat here</Link>
			<Link to='/student-profile'>🏠</Link>
			<Link to='/find-teacher'>Find a teacher</Link>
			<Link to='/video-chat'>call here</Link>
			<Link to='/logout'>Logout</Link>
		</div>
	);
}

export default NavBar;
