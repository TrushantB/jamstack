import React from "react";
import "../../index.css";

export default {
  title: "Core/Visual/Typography",
};

const Colors = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1>Heading 1</h1>
          <div className="flex text-gray-400 gap-3 text-sm">
            <p className="text-xs">
							<span className="font-bold text-black">Font Size</span>: 72px(3.6rem)<br />
							<span className="font-bold text-black">Line Height</span>: 82px<br />
							<span className="font-bold text-xs text-black">Class</span>: heading-1
						</p>
          </div>
          
        </div>

        <div>
          <h2>Heading 2</h2>
          <div className="flex text-gray-400 gap-3 text-sm">
					<p className="text-xs">
						<span className="font-bold text-black">Font Size</span>: 60px(3rem)<br />
						<span className="font-bold text-black">Line Height</span>: 82px<br />
						<span className="font-bold text-xs text-black">Class</span>: heading-2
					</p>
          </div>
        </div>

        <div>
          <h3>Heading 3</h3>
          <div className="flex text-gray-400 gap-3 text-sm">
					<p className="text-xs">
						<span className="font-bold text-black">Font Size</span>: 52px(2.6rem)<br />
						<span className="font-bold text-black">Line Height</span>: Default<br />
						<span className="font-bold text-xs text-black">Class</span>: heading-3
					</p>
          </div>

        </div>

        <div>
          <h4>Heading 4</h4>
          <div className="flex text-gray-400 gap-3 text-sm">
					<p className="text-xs">
						<span className="font-bold text-black">Font Size</span>: 40px(2rem)<br />
						<span className="font-bold text-black">Line Height</span>: Default<br />
						<span className="font-bold text-xs text-black">Class</span>: heading-4
					</p>
          </div>
        </div>

        <div>
          <h5>Heading 5</h5>
          <div className="flex text-gray-400 gap-3 text-sm">
					<p className="text-xs">
						<span className="font-bold text-black">Font Size</span>: 32px(1.6rem)<br />
						<span className="font-bold text-black">Line Height</span>: 38px<br />
						<span className="font-bold text-xs text-black">Class</span>: heading-5
					</p>
          </div>
        </div>

        <div>
					<h3>Paragraph</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<div className="flex text-gray-400 gap-3 text-sm">
					<p className="text-xs">
						<span className="font-bold text-black">Font Size</span>: 20px(1rem)<br />
						<span className="font-bold text-black">Line Height</span>: default<br />
					</p>
					</div>
        </div>
      </div>
    </>
  );
};

export const Default = Colors;
