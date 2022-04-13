import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";



function StudentProfilePage({currentUser, handleSetUser}) {
	console.log(currentUser, "this is current user")
	// const navigate = useNavigate();

	function handleUserImage(event) {
		event.preventDefault();
		let image = event.target.imageUrl.files[0];
		let imageFormData = new FormData();
		imageFormData.append("imageUrl", image);
		imageFormData.append("userId", currentUser._id );

		async function sendImage() {
			let updatedUser = await axios.post("http://localhost:5005/api/student-profile", imageFormData, {
			  withCredentials: true,
			});
			console.log("saved", updatedUser.data);
			let _id = updatedUser.data._id;
			let username = updatedUser.data.username;
			let imageUrl = updatedUser.data.imageUrl;

			handleSetUser({
				_id,
				username,
				imageUrl,
			  });
			}
			// navigate ("/student-profile")
			sendImage()	
	}


	return (
		<div>
		<div>
		  {currentUser.imageUrl ? (
			<img
			  src={currentUser.imageUrl}
			  alt="profile pic"
			  style={{ height: "100px" }}
			/>
		  ) : null}
		  {currentUser ? (
			<h1>Welcome {currentUser.fullName}!</h1>
		  ) : (
			<p>Loading</p>
		  )}
		</div>
  
		<div>
		  <h3>Update your User Image:</h3>
		  <form
			onSubmit={handleUserImage}
			method="post"
			encType="multipart/form-data"
		  >
			<input type="file" accept="image/png, image/jpg" name="imageUrl" />
			<button type="submit">Update</button>
		  </form>
		</div>
	  </div>
	);
  }

export default StudentProfilePage;
