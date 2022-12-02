import React, { useEffect, useState } from "react";

export default function Login() {
  const [showVideoTimer, setShowVideoTimer] = useState(false);
  const videoUrl = "http://c5.wakkaa.com/assets/admin/login/login.mp4";

  useEffect(() => {
    setTimeout(() => {
      setShowVideoTimer(true);
    }, 3000);
  }, []);
  if (showVideoTimer) {
    return <video src={videoUrl}></video>;
  }
  return <div>login</div>;
}
