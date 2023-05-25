import React from 'react'

function JamSTackAuthor({heading , author }) {
  return (
    <div>
        <h2 className=" mt-20 mb-14 w-10/12">
          {heading}
        </h2>
        <h3 className="w-10/12 lg:text-right">{author}</h3>
    </div>
  )
}

export default JamSTackAuthor