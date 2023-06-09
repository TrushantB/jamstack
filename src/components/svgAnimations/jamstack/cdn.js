import React from "react";
import Image from "next/image";

const Cdn = () => {
  return (
    <div>
      <Image
        src="/articleThree.png"
        fill
        alt="Essential svg"
        className="images"
      />
    </div>
  );
};

export default Cdn;
