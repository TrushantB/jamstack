import React, { useState } from "react";

export default {
  title: "Core/Presentational Components/videoBanner",
  argTypes: {
    heading: "text",
    video: "text",
  },
};

const VideoBanner = ({ heading, video }) => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2>{heading}</h2>
      </div>
      <div >
				<video className="rounded-3xl video" controls>
					<source 
          src={video} type="video/mp4" />
					<source src={video}  type="video/ogg" />
				</video>
      </div>
    </div>
  );
};

export const Default = (args) => <VideoBanner {...args} />;
Default.args = {
  heading: "What is JAMstack?",
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
};