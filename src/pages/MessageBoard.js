import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import fakeComments from "../data";

function MessageBoard() {
	const [commentFormState, setCommentFormState] = useState({
		comment: "",
		from: "randomName",
	});

	useEffect(() => {}, []);

	const onFormChange = (event) =>
		setCommentFormState({
			...commentFormState,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = async () => {
		console.log(commentFormState);
		try {
			const data = await axios.post(
				"http://localhost:5005/api/message-board",
				commentFormState,
				{ withCredentials: true },
			);
			console.log(data.data, "Scouse");
			setCommentFormState({});
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};
	return (
		<div>
			<h1>Message Board goes hereeeeeeeeee</h1>
			<h3>Add your message here. Say hi to our community</h3>
			{fakeComments.map((comment) => {
				console.log("am i here", comment);
				<h3 key={comment.from}>{comment.from}</h3>;
			})}
			<FormGroup>
				<TextField
					id='filled-basic'
					label='Add your comment'
					variant='filled'
					name='addComment'
					onChange={onFormChange}
					value={commentFormState.comment}
					required
				/>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
			<Link to='/message-board/:comment_id'>Edit Comment here</Link>
		</div>
	);
}

export default MessageBoard;
