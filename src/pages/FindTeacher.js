import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { API_URL } from "../config";

function FindTeacher({ currentUser }) {
	console.log(currentUser, "<<<<<<<<<");
	const [allTeachersState, setAllTeachersState] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		const getTeachers = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/find-teacher`, {
					withCredentials: true,
				});
				// console.log(data.allTeachers, "teachers*****");
				setAllTeachersState({ ...data });
				// console.log(allTeachersState, "@@@@@@@");
			} catch (err) {
				console.log(err, "errrrrr");
			}
		};

		getTeachers();
	}, []);

	const handleEdit = async (event) => {
		const id = event.target.name;
		navigate(`/add-teacher/${id}`);
	};

	const handleSubmit = () => {
		navigate("/message-board");
	};

	return (
		<div className="find-teacher">
			<h1>Here is a list of local teachers...</h1>
			{currentUser.isTeacher ? (
				<Link to='/find-teacher/add-teacher'>
					Add Yourself as a teacher here
				</Link>
			) : (
				<p>Find your next teacher in {currentUser.city}</p>
			)}

			{allTeachersState ? (
				<>
					{allTeachersState.allTeachers.map((teacher, i) => {
						console.log(teacher);
						return (
							<div key={teacher.fullName + i}>
								<h3>My name is: {teacher.fullName}</h3>
								<p>
									I speak: {teacher.languages} at {teacher.langLevel} level
								</p>
								<p>I live in: {teacher.city}</p>
								<p>
									My {teacher.city} tips: {teacher.cityRec}
								</p>
								<p>My goals for you: {teacher.goals}</p>
								<p>Fun fact about me: {teacher.funFact}</p>
								<p>Hourly rate : €{teacher.price}</p>

								<Button
									type='submit'
									variant='contained'
									onClick={handleSubmit}>
									Contact me
								</Button>
								{currentUser.isTeacher &&
								currentUser.fullName === teacher.fullName ? (
									<Button
										type='submit'
										variant='contained'
										onClick={handleEdit}
										name={teacher._id}>
										Edit Bio
									</Button>
								) : (
									<p></p>
								)}
							</div>
						);
					})}
				</>
			) : (
				<p>Loadingggg......</p>
			)}
		</div>
	);
}

export default FindTeacher;
