import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTeacherForm() {
	const [addTeacherFormState, setAddTeacherFormState] = useState({
		fullName: "",
		languages: "",
		cityRec: "",
		langLevel: "",
		goals: "",
		funFact: "",
		price: "0",
	});
	const navigate = useNavigate();

	const onFormChange = (event) =>
		setAddTeacherFormState({
			...addTeacherFormState,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = async () => {
		console.log(addTeacherFormState);
		try {
			const data = await axios.post(
				"http://localhost:5005/api/add-teacher",
				addTeacherFormState,
				{ withCredentials: true },
			);
			console.log(data.data, "Gordie");
			setAddTeacherFormState({});
			navigate("/find-teacher");
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};
	return (
		<div>
			<h1>Add yourself as teacher here</h1>
			<FormGroup>
				<TextField
					id='filled-basic'
					label='full name'
					variant='filled'
					name='fullName'
					onChange={onFormChange}
					value={addTeacherFormState.fullName}
					required
				/>
				<TextField
					id='filled-basic'
					label='What languages can you teach?'
					variant='filled'
					name='languages'
					onChange={onFormChange}
					value={addTeacherFormState.languages}
					required
				/>
				<TextField
					id='filled-basic'
					label='What level are you in these languages? (eg native, professional, B1)'
					variant='filled'
					name='langLevel'
					onChange={onFormChange}
					value={addTeacherFormState.langLevel}
					required
				/>
				<TextField
					id='filled-basic'
					label='Give us a fun recomendation for your city!'
					variant='filled'
					name='cityRec'
					onChange={onFormChange}
					value={addTeacherFormState.cityRec}
					required
				/>
				<TextField
					id='filled-basic'
					label='Tell us what goals you have for your students? '
					variant='filled'
					name='goals'
					onChange={onFormChange}
					value={addTeacherFormState.goals}
					required
				/>{" "}
				<TextField
					id='filled-basic'
					label='Give us a fun fact about yourself!'
					variant='filled'
					name='funFact'
					onChange={onFormChange}
					value={addTeacherFormState.funFact}
					required
				/>
				<TextField
					id='filled-basic'
					label='Price per hour'
					variant='filled'
					name='price'
					onChange={onFormChange}
					value={addTeacherFormState.price}
					required
				/>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
		</div>
	);
}

export default AddTeacherForm;
