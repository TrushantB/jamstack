import React from "react";
import Button from "../form/button/Button";
import Link from 'next/link'


function MordernTechnology({ heading, type, label, size , href , description,isInner=false}) {
  return (
    <>
      <div className={`${isInner ? 'text-left lg:px-24 ': 'text-center lg:w-8/12 mx-auto'} lg:w-12/12  pt-10`}>
        <h2 className="pb-8 ">{heading}</h2>
        {description && <div className={`heading-4 ${isInner ? 'lg:w-10/12': ' '} pt-3`} >
          <p>{description}</p>
        </div>}
       { label && <div className="pb-10">
          <Link href={href} className="btn">
            {label}
          </Link>
        </div>}
      </div>
    </>
  );
}

export default MordernTechnology;
