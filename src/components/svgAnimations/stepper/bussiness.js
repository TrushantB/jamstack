import React, { useEffect } from "react";
import Image from "next/image";

const Bussiness = () => {
  return (
    <div className="relative h-96 lg:h-80 w-full">
      <Image
        src="/essentialSVG.svg"
        fill
        alt="Essential svg"
        className=" -z-10"
     
      />
    </div>
  );
};

export default Bussiness;
