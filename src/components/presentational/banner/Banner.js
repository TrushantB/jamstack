import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../../form/button/Button";
//import "./Banner.css";

const Banner = ({ heading, image, type, size, label, onClick, layout  }) => {
  return (
    <div className="container">
      <div className={layout === "Image Bottom" ? "" : "md:flex"}>
        <div
          className={layout === "Image Left" ? "md:w-1/2 flex" : "text-center"}
        >
          <div className={layout === "Image Left" ? "flex items-center" : ""}>
            <div>
              <h2 className="text-black-950 font-bold text-7xl">{heading}</h2>

              <div className="my-16">
                <Button
                  label={label}
                  onClick={onClick}
                  type={type}
                  size={size}
                />
              </div>
            </div>
          </div>
        </div>
        {layout === "Image Left" && (
          <div className="flex md:w-1/2 items-center justify-center">
            <img src={image} alt="image" />
          </div>
        )}
        {layout === "Image Bottom" && (
          <div className="flex  items-center justify-center">
            <img className="w-10/12" src={image} alt="image" />
          </div>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  layout: PropTypes.oneOf(["Image Left", "Image Bottom", "Banner No Button"]),
};

export default Banner;