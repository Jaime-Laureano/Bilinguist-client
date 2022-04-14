import React from "react";
import { Link } from "react-router-dom";
import home from "../logos/home.png"

function NavBar() {
	return (
		<div className="nav">
			<Link to='/student-profile'>
			<img src={home} alt="home icon" height={50} />
			</Link>
			<Link to='/practice'>PRACTICE</Link>
			<Link to='/message-board'>CHAT HERE</Link>
			<Link to='/find-teacher'>FIND A TEACHER</Link>
			<Link to='/video-chat'>CALL</Link>
			<Link to='/logout'>LOGOUT</Link>
		</div>
	);
}

export default NavBar;
