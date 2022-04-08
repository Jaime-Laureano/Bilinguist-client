import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const [loginFormState, setLoginFormState] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	useEffect(() => {}, []);

	const onFormChange = (event) =>
		setLoginFormState({
			...loginFormState,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = async () => {
		try {
			const data = await axios.post(
				"http://localhost:5005/api/login",
				loginFormState,
				{ withCredentials: true },
			);
			console.log(data.data.isTeacher, "Brummie login data");
			setLoginFormState({});

			if (data.data.isTeacher === true) {
				navigate("/teacher-profile");
			} else {
				navigate("/student-profile");
			}
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
			<FormGroup>
				<TextField
					id='filled-basic'
					label='email'
					variant='filled'
					name='email'
					onChange={onFormChange}
					value={loginFormState.email}
					type='email'
					required
				/>
				<TextField
					id='filled-basic'
					label='password'
					variant='filled'
					name='password'
					type='password'
					onChange={onFormChange}
					value={loginFormState.password}
					required
				/>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default LoginForm;
