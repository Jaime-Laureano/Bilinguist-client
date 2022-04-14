import React from "react";
import { Link } from "react-router-dom";
import logoOne from "../logos/logoOne.png";
import logoTwo from "../logos/logoTwo.png";
import speakingPic from "../logos/speakingPic.jpeg"

function HomePage() {
	return (
		<div className="home">
			<h1>Welcome | Bienvenido | ようこそ | Willkommen | أهلا بك | Tervetuloa</h1>
			<br />
			<img className="big-logo" src={logoOne} alt="logo" height={200} />
			<div className="logOrSign">
			<Link to='/signup'>signup</Link>
			<p>or</p>
			<Link to='/login'>login</Link>
			</div>
			<p className="homeIntro">Welcome to Bi-Linguist! Your new language learning home, equipped with all the tools needed in order to help you learn a new language.</p>
			<br />
			<img className="hpImage" src={speakingPic} alt="logo" height={400} />
			
			<p className="homeIntro">Sign up or log in now to start learning.</p>
			<p className="homeIntro">Looking for some extra income? Sign up as a teacher account, create an advert, and make some cash while helping others.</p>
			<img className="logoTwo" src={logoTwo} alt="logo" height={250} />
		</div>
	);
}

export default HomePage;
