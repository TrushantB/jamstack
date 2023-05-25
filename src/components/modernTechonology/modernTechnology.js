import React from "react";
import Button from "../form/button/Button";
import Link from 'next/link'


function MordernTechnology({ heading, type, label, size , href , description}) {
  return (
    <>
      <div className="text-center lg:w-8/12 mx-auto pt-10">
        <h2 className="pb-8 ">{heading}</h2>
        {description && <div className="heading-4 lg:pl-24 lg:w-10/12 pt-3" >
          <p>{description}</p>
        </div>}
       { label && <div className="pb-10">
          <Link href={href} >
          <Button label={label} type={type} size={size} />
          </Link>
        </div>}
      </div>
    </>
  );
}

export default MordernTechnology;
