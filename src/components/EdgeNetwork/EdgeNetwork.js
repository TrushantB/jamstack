import React from 'react'

function EdgeNetwork({heading  ,image }) {
  return (
    <div className=" pb-24 container mx-auto">
        <h2 className="text-4xl text-center  pb-10 ">
          {heading}
        </h2>
        <div className='flex justify-center'>
          <img src={image} />
        </div>
      </div>
  )
}

export default EdgeNetwork