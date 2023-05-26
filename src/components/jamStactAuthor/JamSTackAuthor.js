import React from 'react'

function JamSTackAuthor({heading , author }) {
  return (
    <div className='py-20'>
        <h2 className="  mb-7 w-12/12">
          {heading}
        </h2>
        <h3 className=" lg:text-right">{author}</h3>
    </div>
  )
}

export default JamSTackAuthor