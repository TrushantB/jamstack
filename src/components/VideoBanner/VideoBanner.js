import React from "react";

function VideoBanner({ heading, video }) {
  return (
    <>
      <div>
        <div className="text-center mb-12">
          <h2>{heading}</h2>
        </div>
        <div>
          <video className="rounded-3xl video" controls={true} loop={true} autoPlay={true}>
            <source src={video?.Videolink} type="video/mp4" />
            <source src={video?.Videolink} type="video/ogg" />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoBanner;