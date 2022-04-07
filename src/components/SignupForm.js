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
		fullName: "",
		email: "",
		password: "",
		country: "",
		city: "",
	});
	const navigate = useNavigate();

	useEffect(() => {}, []);

	const onFormChange = (event) =>
		setFormState({ ...formState, [event.target.name]: event.target.value });

	const handleSubmit = async () => {
		console.log(formState);
		try {
			const data = await axios.post("/signup", formState);
			console.log(data);
			setFormState({});
			navigate("/profile");
		} catch (err) {
			console.error(err);
			console.log(err.response);

			setFormState({
				...formState,
				error: err.response.data.errorMessage || err.message,
			});
		}
	};

	return (
		<div>
			<FormGroup>
				<TextField
					id='filled-basic'
					label='full name'
					variant='filled'
					name='fullName'
					onChange={onFormChange}
					value={formState.fullName}
					required
				/>
				<TextField
					id='filled-basic'
					label='email'
					variant='filled'
					name='email'
					onChange={onFormChange}
					value={formState.email}
					type='email'
					required
				/>
				<TextField
					id='filled-basic'
					label='password'
					variant='filled'
					name='password'
					onChange={onFormChange}
					value={formState.password}
					type='password'
					required
				/>
				<TextField
					id='filled-basic'
					label='country'
					variant='filled'
					name='country'
					onChange={onFormChange}
					value={formState.country}
				/>
				<TextField
					id='filled-basic'
					label='city'
					variant='filled'
					name='city'
					onChange={onFormChange}
					value={formState.city}
				/>

				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default SignupForm;
