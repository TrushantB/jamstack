import React from 'react'

export const JamStackRecipe = ({heading , label}) => {
  return (
    <div>
        <h2  className=" text-center  lg:w-8/12 ">{heading}</h2>
        <h2 className="text-tertiary">{label}</h2>
    </div>
  )
}
