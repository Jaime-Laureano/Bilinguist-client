import React, { useState, useEffect } from "react";
import {
	TextField,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	CheckBox,
	Button,
	FormGroup,
} from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForm() {
	const [formState, setFormState] = useState({
		"full name": "",
		email: "",
		password: "",
		country: "",
		city: "",
		"who are you?": "Student",
	});
	const navigate = useNavigate();

	useEffect(() => {}, []);

	const handleRegister = async () => {
		try {
			const data = await axios.post("/signup", formState);
			console.log(data);
			setFormState({});
			navigate("/login");
		} catch (err) {
			console.error(err);
			console.log(err.response);

			setFormState({
				...formState,
				error: err.response.data.errorMessage || err.message,
			});
		}
	};

	const onFormChange = (event) =>
		setFormState({ ...formState, [event.target.name]: event.target.value });

	const handleSubmit = () => console.log(formState, "<<<<<,,");

	return (
		<div>
			<FormGroup>
				<TextField
					id='filled-basic'
					label='full name'
					variant='filled'
					onChange={onFormChange}
					value={formState["full name"]}
					required
				/>
				<TextField
					id='filled-basic'
					label='email'
					variant='filled'
					onChange={onFormChange}
					value={formState.email}
					type='email'
					required
				/>
				<TextField
					id='filled-basic'
					label='password'
					variant='filled'
					onChange={onFormChange}
					value={formState.password}
					type='password'
					required
				/>
				<TextField
					id='filled-basic'
					label='country'
					variant='filled'
					onChange={onFormChange}
					value={formState.country}
				/>
				<TextField
					id='filled-basic'
					label='city'
					variant='filled'
					onChange={onFormChange}
					value={formState.city}
				/>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id='demo-simple-select-label' required>
						Who are you?
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value='Other'
						label='Type'>
						<MenuItem value={"Teacher"}>Teacher</MenuItem>
						<MenuItem value={"Student"}>Student</MenuItem>
					</Select>
				</FormControl>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default SignupForm;
