import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Jamstack = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="player-wrapper">
      {!loading && (
        <ReactPlayer
          url={"./Jamstack+.mp4"}
          playing={true}
          muted={true}
          width="100%"
          height="100%"
        ></ReactPlayer>
      )}
    </div>
  );
};

export default Jamstack;
