import React, { useState } from "react";
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

function SignupForm() {
	const [formState, setFormState] = useState({});

	return (
		<div>
			<FormGroup>
				<TextField id='filled-basic' label='full name' variant='filled' />
				<TextField id='filled-basic' label='email' variant='filled' />
				<TextField id='filled-basic' label='password' variant='filled' />
				<TextField id='filled-basic' label='country' variant='filled' />
				<TextField id='filled-basic' label='city' variant='filled' />
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id='demo-simple-select-label'>Who are you?</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value='Other'
						label='Type'>
						<MenuItem value={"Teacher"}>Teacher</MenuItem>
						<MenuItem value={"Student"}>Student</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant='contained'
					onClick={() => {
						alert("clicked");
					}}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default SignupForm;
