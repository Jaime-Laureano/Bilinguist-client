import React, { useState } from "react";
import chatImg from "../logos/chatImg.webp"

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video-call/${room}`);
  };
  function handleRoom (e ) {
		console.log(e.target.value)
		let value = e.target.value
		setRoom (value)
  }

  return (
    <div className="join-meeting">
      <input type="text" onChange = {handleRoom} />

      <button onClick={onSubmit}>Submit</button>
      <p>Looking to join a room? Great! Go ahead and put in the room name above.</p>
      <p>You can also create a new room by also naming it above.</p>
      <br />
      <p>No computer, no problem! Our video chat features works on mobiles as well.</p>
      <img className="hpImage" src={chatImg} alt="logo" height={400} />
    </div>
  );
}