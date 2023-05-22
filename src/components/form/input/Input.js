import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function InputFields(props) {
  const [error, setError] = useState("");
  const { placeholder, isButton, buttonlabel } = props;

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const handleChange = (event) => {
    if (error) {
      setError("");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
        <input
          placeholder={placeholder}
          className="border rounded-full py-2 px-2 lg:pl-4 lg:w-1/2 "
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {
          isButton && (
            <button className="bg-primary py-2 px-4 rounded-full lg:-ml-10 text-xl text-white">
              {buttonlabel}
            </button>
          )
        }
      </div>
      {
        error &&
        <div className="flex flex-wrap items-center ml-4 w-full sm:w-1/2 text-xs my-2">
          <p className="text-red-500">{error}</p>
        </div>
      }
    </>
  );
}

InputFields.propTypes = {
  placeholder: PropTypes.string,
  buttonlabel: PropTypes.string,
  isButton: PropTypes.bool,
};

export default InputFields;
