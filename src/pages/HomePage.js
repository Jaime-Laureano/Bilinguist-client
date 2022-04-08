import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<h1>Welcome to Biliguist </h1>
			<Link to='/signup'>signup</Link>
			<p>or</p>
			<Link to='/login'>login</Link>
		</div>
	);
}

export default HomePage;
