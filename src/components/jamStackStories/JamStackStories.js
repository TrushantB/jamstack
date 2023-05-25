import React from 'react'

export const JamStackStories = ({heading , descriptionArray}) => {
  return (
    <div>
        <h2>{heading}</h2>
        {
            descriptionArray && descriptionArray.map((item , index) => (
                <p key={index} >{item.description}</p>
            ))
        }
    </div>
  )
}
