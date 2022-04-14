import React from "react";
import { Link } from "react-router-dom";
import logoOne from "../logos/logoOne.png"

function HomePage() {
	return (
		<div className="home">
			<h1>Welcome | Bienvenido | ようこそ | Willkommen | أهلا بك | Tervetuloa</h1>
			<img className="big-logo" src={logoOne} alt="logo" height={200} />
			<br/>
			<Link to='/signup'>signup</Link>
			<p>or</p>
			<Link to='/login'>login</Link>
		</div>
	);
}

export default HomePage;
