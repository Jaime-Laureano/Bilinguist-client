import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<Link to='/signup'>signup here</Link>
			<Link to='/login'>login</Link>
		</div>
	);
}

export default NavBar;
