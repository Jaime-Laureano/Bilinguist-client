import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import Practice from "./pages/Practice";
import HomePage from "./pages/HomePage";
import JoinRoom from "./pages/VideoChat";
import MessageBoard from "./pages/MessageBoard";
import EditComment from "./pages/EditComment";
import FindTeacher from "./pages/FindTeacher";
import LogoutPage from "./pages/LogoutPage";
import AddTeacherForm from "./components/AddTeacherForm";
import VideoCall from "./pages/VideoCall";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config";
import Footer from './components/Footer';
import Error404 from './pages/Error404';


function App() {
	const [user, setUser] = useState();
	useEffect(() => {
		const data = async () => {
			const currentUser = await axios.get(`${API_URL}/user`, {
				withCredentials: true,
			});
			setUser(currentUser.data);
		};
		data();
	}, []);

	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/user' />
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginForm handleSetUser={setUser} />} />
				<Route
					path='/student-profile'
					element={
						<StudentProfilePage handleSetUser={setUser} currentUser={user} />
					}
				/>
				<Route path='/teacher-profile' element={<TeacherProfilePage />} />
				<Route path='/practice' element={<Practice />} />

				<Route path='/video-chat' element={<JoinRoom />} />
			
				<Route
					path='/message-board'
					element={<MessageBoard handleSetUser={setUser} currentUser={user} />}
				/>

				<Route path='/message-board/:comment_id' element={<EditComment />} />
				<Route path='/find-teacher' element={<FindTeacher />} />
				<Route path='/find-teacher/add-teacher' element={<AddTeacherForm />} />
				<Route path='/logout' element={<LogoutPage />} />
				<Route path="/video-call/:id" element={<VideoCall />} />
				<Route path="*" element={< Error404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
