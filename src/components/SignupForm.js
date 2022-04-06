import React from "react";
import {
	TextField,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	CheckBox,
} from "@mui/material";

function SignupForm() {
	return (
		<div>
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
		</div>
	);
}

export default SignupForm;
