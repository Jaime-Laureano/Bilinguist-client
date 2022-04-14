import React, { useEffect, useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

function EditTeacherBio() {
	console.log("am i here?");

	const [bioState, setBioState] = useState();
	const navigate = useNavigate();
	const { id } = useParams();

	console.log(id, "<<<< id");

	const editComment = async () => {
		try {
			await axios.put(`${API_URL}/add-teacher/${id}`, bioState, {
				withCredentials: true,
			});
			setBioState({});
			navigate("/find-teacher");
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};

	const onFormChange = (event) => {
		setBioState({
			...bioState,
			[event.target.name]: event.target.value,
		});
	};

	const handleDelete = async () => {
		try {
			await axios.post(
				`${API_URL}/add-teacher/${id}`,
				{},

				{ withCredentials: true },
			);
			setBioState({});
			navigate("/find-teacher");
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};

	useEffect(() => {
		console.log("inuseeffect");
		const getBio = async () => {
			try {
				const { data } = await axios.get(`${API_URL}/add-teacher/${id}`, {
					withCredentials: true,
				});
				console.log(data, "<<<<<data");
				setBioState({ ...data.message });
			} catch (err) {
				console.error(err, "<<<<<");
			}
		};

		getBio();
	});

	return (
		<div>
			{!bioState ? (
				<p>Loading....</p>
			) : (
				<FormGroup>
					<TextField
						id='filled-basic'
						label='full name'
						variant='filled'
						name='fullName'
						onChange={onFormChange}
						value={bioState.fullName}
						required
					/>
					<TextField
						id='filled-basic'
						label='What languages can you teach?'
						variant='filled'
						name='languages'
						onChange={onFormChange}
						value={bioState.languages}
						required
					/>
					<TextField
						id='filled-basic'
						label='What level are you in these languages? (eg native, professional, B1)'
						variant='filled'
						name='langLevel'
						onChange={onFormChange}
						value={bioState.langLevel}
						required
					/>
					<TextField
						id='filled-basic'
						label='Give us a fun recomendation for your city!'
						variant='filled'
						name='cityRec'
						onChange={onFormChange}
						value={bioState.cityRec}
						required
					/>
					<TextField
						id='filled-basic'
						label='Tell us what goals you have for your students? '
						variant='filled'
						name='goals'
						onChange={onFormChange}
						value={bioState.goals}
						required
					/>{" "}
					<TextField
						id='filled-basic'
						label='Give us a fun fact about yourself!'
						variant='filled'
						name='funFact'
						onChange={onFormChange}
						value={bioState.funFact}
						required
					/>
					<TextField
						id='filled-basic'
						label='Price per hour'
						variant='filled'
						name='price'
						onChange={onFormChange}
						value={bioState.price}
						required
					/>
					<Button type='submit' variant='contained' onClick={editComment}>
						Submit Edit
					</Button>
					<Button type='delete' variant='contained' onClick={handleDelete}>
						Delete
					</Button>
				</FormGroup>
			)}
		</div>
	);
}

export default EditTeacherBio;
