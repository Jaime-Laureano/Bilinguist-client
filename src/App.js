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
import MessageBoard from "./pages/MessageBoard";
import EditComment from "./pages/EditComment";
import FindTeacher from "./pages/FindTeacher";
import LogoutPage from "./pages/LogoutPage";

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
				<Route path='/practice' element={<Practice />} />
				<Route path='/video-chat' element={<VideoChat />} />
				<Route path='/message-board' element={<MessageBoard />} />
				<Route path='/message-board/:comment_id' element={<EditComment />} />
				<Route path='/find-teacher' element={<FindTeacher />} />
				<Route path='/logout' element={<LogoutPage />} />
			</Routes>
		</div>
	);
}

export default App;
