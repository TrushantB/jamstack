import React from "react";

function VideoBanner({ heading, video, }) {
  return (
    <>
      <div className="container lg:py-24 py-16 mx-auto">
        <div className="mb-12 mx-4 lg:mx-0 text-center">
          <h2>{heading}</h2>
        </div>
        <div className="mx-4 lg:mx-0 ">
          <video
            className="rounded-3xl video "
            controls={video.controls}
            loop={true}
            autoPlay={true}
          >
            <source src={video?.Videolink} type="video/mp4" />
            <source src={video?.Videolink} type="video/ogg" />
          </video>
        </div>
      </div>
    </>
  );
}

export default VideoBanner;
