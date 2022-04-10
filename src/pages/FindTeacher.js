import React from "react";
import { Link } from "react-router-dom";
import AddTeacherForm from "../components/AddTeacherForm";

function FindTeacher() {
	return (
		<div>
			<h1>list of all teachers here</h1>
			<Link to='/find-teacher/add-teacher'>Add Yourself as a teacher here</Link>
		</div>
	);
}

export default FindTeacher;
