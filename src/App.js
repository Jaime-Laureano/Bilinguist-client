import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route pathname='/signup' element={<SignupForm />} />
			</Routes>
		</div>
	);
}

export default App;
