import React from 'react'

export const JamStackStories = ({heading , descriptionArray}) => {
  return (
    <div>
        <h2 className=" mt-20 mb-14">{heading}</h2>
        {
            descriptionArray && descriptionArray.map((item , index) => (
                <p className=" w-10/12 heading-4 mb-12" key={index} >{item.description}</p>
            ))
        }
    </div>
  )
}
