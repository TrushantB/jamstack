import React from "react";
import Button from "../form/button/Button";
import Link from "next/link";

const ModernTechnologyOne = ({ heading, type, label, size, href }) => {
  return (
    <div className=" bg-secondary flex flex-col items-center  pt-24 pb-32">
      <h3 className="text-center text-white w-11/12 ">{heading}</h3>
      {label && (
        <div className="pt-10">
          <Link href={href}>
            <Button label={label} type={type} size={size} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ModernTechnologyOne;
