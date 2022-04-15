import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

export default function VideoCall() {
  const { id } = useParams();
  console.log("cheese", id);

  useEffect(() => {
    const domain = "https://bilinguist-videochat.daily.co/";

    axios
      .get(`${API_URL}/video-call/${id}`)
    //   process.env the above
      .then((res) => {
        if (res.status === 200) {
          const script = document.createElement("script");
          script.id = "videoChat";
          script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "absolute",
              top: "0px",
              left:"0px",
              width: "100vw",
              height: "100vh",
              border: "0",
              zIndex: 9999
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${domain}${id}",
          });`;

          document.body.appendChild(script);
        }
      })
      .catch((err) => console.log(err));
    return () => {
      const videoChatElement = document.getElementById("videoChat");
      videoChatElement.remove()
      
      const iframe = document.querySelector ("iframe")
      iframe.remove()
    };
  }, [id]);

  return <div></div>;
}
