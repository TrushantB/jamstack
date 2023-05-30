import React from 'react'

export const JamStackStories = ({heading , descriptionArray}) => {
  return (
    <div>
        <h2 className="mb-6">{heading}</h2>
        {
            descriptionArray && descriptionArray.map((item , index) => (
                <p className="lg:w-10/12 heading-4 mb-12" key={index} >{item.description}</p>
            ))
        }
    </div>
  )
}
