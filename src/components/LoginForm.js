import { FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";

function LoginForm() {
	const [loginFormState, setLoginFormState] = useState({});

	const onFormChange = (event) =>
		setLoginFormState({
			...loginFormState,
			[event.target.name]: event.target.value,
		});
	return (
		<div>
			<FormGroup>
				<TextField
					id='filled-basic'
					label='full name'
					variant='filled'
					name='password'
					onChange={onFormChange}
					value={loginFormState.password}
					required
				/>

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
			</FormGroup>
		</div>
	);
}

export default LoginForm;
