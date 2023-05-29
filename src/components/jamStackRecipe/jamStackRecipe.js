import React from 'react'

export const JamStackRecipe = ({heading , label}) => {
  return (
    <div>
        <h2  className=" text-center  ">{heading}</h2>
        <h2 className="text-tertiary text-center">{label}</h2>
    </div>
  )
}
