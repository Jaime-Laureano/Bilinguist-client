import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/signup' element={<SignupForm />} />
			</Routes>
		</div>
	);
}

export default App;
