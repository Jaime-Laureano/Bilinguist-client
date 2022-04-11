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
	const [allCommentsState, setAllCommentsState] = useState();

	useEffect(() => {
		allComments();
	}, []);

	const allComments = async () => {
		try {
			const { data } = await axios.get(
				"http://localhost:5005/api/message-board",
				{
					withCredentials: true,
				},
			);
			console.log(data.messages, "<<< allComments");
			setAllCommentsState({ ...data });
		} catch (err) {
			console.log(err, "in message board client");
		}
	};

	const onFormChange = (event) =>
		setCommentFormState({
			...commentFormState,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = async () => {
		console.log(commentFormState, "from clienttttttt");
		try {
			const { data } = await axios.post(
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

	console.log(allCommentsState, "lllllllllllll whyyy is this happeninggggg");

	return (
		<div>
			<h1>Message Board goes hereeeeeeeeee</h1>
			<h3>Add your message here. Say hi to our community</h3>

			<FormGroup>
				<TextField
					id='filled-basic'
					label='Add your comment'
					variant='filled'
					name='comment'
					onChange={onFormChange}
					value={commentFormState.comment}
					required
				/>
				<Button type='submit' variant='contained' onClick={handleSubmit}>
					Submit
				</Button>
			</FormGroup>
			<>
				{allCommentsState.messages.map((comment, i) => {
					console.log("am i here", comment.from);
					return <p key={comment.from + i}>{comment.comment}</p>;
				})}
			</>
			<Link to='/message-board/:comment_id'>Edit Comment here</Link>
		</div>
	);
}

export default MessageBoard;
