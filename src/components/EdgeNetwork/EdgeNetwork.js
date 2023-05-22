import React from 'react'

function EdgeNetwork({heading  ,image }) {
  return (
    <div className="border-t-2 border-b-2 pb-32 border-blue-600">
        <h2 className="text-4xl text-center ">
          {heading}
        </h2>
        <div>
          <img src={image} />
        </div>
      </div>
  )
}

export default EdgeNetwork