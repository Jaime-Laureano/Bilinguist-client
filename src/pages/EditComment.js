import React, { useEffect, useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

function EditComment() {
	console.log("am i here?");

	const [commentState, setCommentState] = useState();
	const navigate = useNavigate();
	const { id } = useParams();

	console.log(id, "<<<< id");

	const getComment = async () => {
		try {
			const { data } = await axios.get(`${API_URL}/message-board/${id}`, {
				withCredentials: true,
			});
			console.log(data, "<<<<<data");
			setCommentState({ ...data.message });
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};

	const editComment = async () => {
		try {
			await axios.put(`${API_URL}/message-board/${id}`, commentState, {
				withCredentials: true,
			});
			setCommentState({ comment: "" });
			navigate("/message-board");
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};

	const onFormChange = (event) => {
		setCommentState({
			...commentState,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		console.log("inuseeffect");

		getComment();
	});

	return (
		<div>
			{!commentState ? (
				<p>Loading....</p>
			) : (
				<FormGroup>
					<TextField
						id='filled-basic'
						label='Edit your comment'
						variant='filled'
						name='comment'
						onChange={onFormChange}
						value={commentState.comment}
						required
					/>
					<Button type='submit' variant='contained' onClick={editComment}>
						Submit Edit
					</Button>
				</FormGroup>
			)}
		</div>
	);
}

export default EditComment;
