import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Routes>
		</div>
	);
}

export default App;
