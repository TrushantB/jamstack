import React from "react";

function VideoBanner({ heading, video }) {
  return (
    <>
      <div className="container py-24 mx-auto">
        <div className="mb-12 text-center">
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
