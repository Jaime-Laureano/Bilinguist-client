import { FormGroup, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

function MessageBoard({ currentUser }) {
	const [commentFormState, setCommentFormState] = useState({
		comment: "",
		from: "randomName",
	});
	const [allCommentsState, setAllCommentsState] = useState();
	const navigate = useNavigate();

	const allComments = async () => {
		try {
			const { data } = await axios.get(
				`${API_URL}/message-board`,
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

	useEffect(() => {
		allComments();
	}, []);

	const onFormChange = (event) => {
		setCommentFormState({
			...commentFormState,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async () => {
		console.log(commentFormState, "from clienttttttt");
		try {
			await axios.post(
				`${API_URL}/message-board`,
				commentFormState,
				{ withCredentials: true },
			);
			setCommentFormState({ comment: "" });
			allComments();
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};
	const handleEdit = async (event) => {
		const id = event.target.name;
		navigate(`/message-board/${id}`);
	};

	const handleDelete = async (event) => {
		const id = event.target.name;
		try {
			await axios.post(
				`http://localhost:5005/api/message-board/${id}`,
				{},

				{ withCredentials: true },
			);
			setCommentFormState({ comment: "" });
			allComments();
		} catch (err) {
			console.error(err, "<<<<<");
		}
	};

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
			{allCommentsState ? (
				<>
					{allCommentsState.messages.map((comment, i) => {
						return (
							<div key={comment.from + i}>
								<p>{comment.comment}</p>
								<p>
									by {comment.from} at{" "}
									{new Date(comment.updatedAt).toUTCString()}
								</p>
								{comment.from === currentUser.fullName ? (
									<>
										<Button
											type='submit'
											variant='contained'
											onClick={handleEdit}
											name={comment._id}>
											Edit
										</Button>{" "}
										<Button
											type='delete'
											variant='contained'
											onClick={handleDelete}
											name={comment._id}>
											Delete
										</Button>
									</>
								) : (
									<p></p>
								)}
							</div>
						);
					})}
				</>
			) : (
				<p>Loadinggggggggggggg</p>
			)}
		</div>
	);
}

export default MessageBoard;
