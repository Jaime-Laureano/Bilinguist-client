import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherProfilePage from "./pages/TeacherProfilePage";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/profile/student' element={<StudentProfilePage />} />
				<Route path='/profile/teacher' element={<TeacherProfilePage />} />
			</Routes>
		</div>
	);
}

export default App;
