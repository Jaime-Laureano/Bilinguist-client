import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FindTeacher() {
	const [allTeachersState, setAllTeachersState] = useState();

	const getTeachers = async () => {
		try {
			const { data } = await axios.get(
				"http://localhost:5005/api/find-teacher",
				{
					withCredentials: true,
				},
			);
			console.log(data.allTeachers, "teachers*****");
			setAllTeachersState({ ...data });
			console.log(allTeachersState, "@@@@@@@");
		} catch (err) {
			console.log(err, "errrrrr");
		}
	};

	useEffect(() => {
		getTeachers();
	}, []);
	return (
		<div>
			<h1>list of all teachers here</h1>
			<Link to='/find-teacher/add-teacher'>Add Yourself as a teacher here</Link>
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
