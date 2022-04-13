import React, { useState } from "react";

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
    <div>
      <input type="text" onChange = {handleRoom} />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}