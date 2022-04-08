import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import Practice from "./pages/Practice";
import HomePage from "./pages/HomePage";
import VideoChat from "./pages/VideoChat";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/student-profile' element={<StudentProfilePage />} />
				<Route path='/teacher-profile' element={<TeacherProfilePage />} />
				<Route path='/practice-page' element={<Practice />} />
				<Route path='/video-chat' element={<VideoChat />} />
			</Routes>
		</div>
	);
}

export default App;
