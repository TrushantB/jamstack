import React from 'react'

const Info = ({description,question,lineIMage}) => {
  return (
   
         <div className="mb-20 flex flex-col items-center px-5 lg:px-0">
        <h2 className="text-center pb-5">{question}</h2>
        <p className="lg:w-7/12 mx-auto text-center">
          {description}
        </p>
        <img
          className="py-4"
          src={`${lineIMage.url}`}
        ></img>
      </div>
   
  )
}

export default Info