import { React, useState } from "react";
import Button from "@/components/form/button/Button"


function OurClient({heading , imageList , type  , label , size}) {
  return (
    <div className="flex pt-5">
    <div>
      <div>
        <h2>{heading}</h2>
      </div>
      <div>
        <Button label={label}  type={type} size={size} />
      </div>
    </div>
    <div className="lg:w-1/2">
      <ul className="grid grid-cols-3 border-t-2 border-b-2">
        {imageList && imageList?.map((item, index) => (
          <>
            <li
              className={
                index % 3 !== 0 && (index + 1) % 3 !== 0
                  ? "border-l-2 border-r-2 border-b-2"
                  : "border-b-2"
              }
              key={index}
            >
              {item.image ? (
                <img src={item.image} alt={item.altTag} href={item.href} />
              ) : (
                <td colSpan="2"></td>
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  </div>



    )
}

export default OurClient