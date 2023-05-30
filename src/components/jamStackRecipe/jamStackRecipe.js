import React from 'react'

export const JamStackRecipe = ({heading , label}) => {
  return (
    <div className='text-center'>
      <h2  className="text-4xl md:text-5xl mb-4">{heading}</h2>
      <h3 className="text-tertiary text-4xl md:text-5xl">{label}</h3>
    </div>
  )
}
