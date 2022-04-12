import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FindTeacher() {
	const [allteachersSate, setAllTeachersState] = useState();

	useEffect(() => {
		getTeachers();
	}, []);

	const getTeachers = async () => {
		try {
			const data = await axios.get("http://localhost:5005/api/find-teacher");
			console.log(data, "teachers*****");
		} catch (err) {
			console.log(err, "errrrrr");
		}
	};
	return (
		<div>
			<h1>list of all teachers here</h1>

			<Link to='/find-teacher/add-teacher'>Add Yourself as a teacher here</Link>
		</div>
	);
}

export default FindTeacher;
