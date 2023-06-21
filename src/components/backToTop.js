import React, { useEffect } from "react";
import ScrollUp from "./shared/ScrollUp";

const ToTop = () => {
  return (
    <div>
      <div className="bg-primary flex justify-center items-center rounded-full w-10 h-10 p-2">
        <a onClick={ScrollUp}>
          <span className="icon-arrow-up w-10 h-10 text-white"></span>
        </a>
      </div>
    </div>
  );
};

export default ToTop;
