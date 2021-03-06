import React from "react";
import axios from "axios";
import { API_URL } from "../config";
import langtravel from "../logos/langtravel.jpeg"







function StudentProfilePage({currentUser, handleSetUser}) {
	console.log(currentUser, "this is current user")
	// const navigate = useNavigate();


	function handleUserImage(event) {
		event.preventDefault();
		let image = event.target.imageUrl.files[0];
		let imageFormData = new FormData();
		imageFormData.append("imageUrl", image);
		imageFormData.append("userId", currentUser._id);

		async function sendImage() {

			let updatedUser = await axios.post(`${API_URL}/student-profile`, imageFormData, {
			  withCredentials: true,
			});
      
			console.log("saved", updatedUser.data);
			let _id = updatedUser.data._id;
			let fullName = updatedUser.data.fullName;
			let imageUrl = updatedUser.data.imageUrl;

			handleSetUser({
				_id,
				fullName,
				imageUrl,
			});
		}
		// navigate ("/student-profile")
		sendImage();
	}

	return (
		<div className="profile-page">
			<div>
				{currentUser.imageUrl ? (
					<img
						className="profile-pic"
						src={currentUser.imageUrl}
						alt='profile pic'
						style={{ height: "200px" }}
					/>
				) : null}
				{currentUser ? (
					<h1>Welcome {currentUser.fullName}!</h1>
				) : (
					<p>Loading</p>
				)}
			</div>

			<div className="profile1">Use the above links to get started, and you'll be speaking a new language in no time!</div>
				<img className="img2" src={langtravel} alt="logo" height={400} />
			<div>
				<h3>Update your User Image:</h3>
				<form
					onSubmit={handleUserImage}
					method='post'
					encType='multipart/form-data'>
					<input type='file' accept='image/png, image/jpg' name='imageUrl' />
					<button type='submit'>Update</button>
				</form>
			</div>
		</div>
	);
}

export default StudentProfilePage;
