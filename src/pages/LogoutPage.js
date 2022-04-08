import React, { useState } from "react";
import { FormGroup, Button } from "@mui/material";
import axios from "axios";

function LogoutPage() {
	const [loginFormState, setLoginFormState] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async () => {
		try {
			const data = await axios.post(
				"http://localhost:5005/api/logout",
				loginFormState,
				{ withCredentials: true },
			);
			console.log(data.data.isTeacher, "Gordie login data");
			setLoginFormState({});
		} catch (err) {
			console.error(err, "<<<<<");
			// console.log(err.response);

			// setFormState({
			// 	...formState,
			// 	error: err.response.data.errorMessage || err.message,
			// });
		}
	};
	return (
		<div>
			<h1>Sure you wanna log out?</h1>
			<FormGroup>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default LogoutPage;
