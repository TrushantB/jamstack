import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoBanner({ heading, video }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <div className="container lg:py-24 py-16 mx-auto">
        <div className="mb-12 mx-4 lg:mx-0 text-center">
          <h2 id="videoBanner">{heading}</h2>
        </div>
        <div className="mx-4 lg:mx-0 player-wrapper">
          {!loading && (
            <ReactPlayer
              className="  "
              url={video?.Videolink}
              playing={true}
              muted={true}
              width="100%"
              height="100%"
              loop={true}
            ></ReactPlayer>
          )}
        </div>
      </div>
    </>
  );
}

export default VideoBanner;
