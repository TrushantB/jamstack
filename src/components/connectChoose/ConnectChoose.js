import React from 'react'
import Button from '../form/button/Button'

function ConnectChoose({heading , description , type, size, label }) {
  return (
    <div className=" ">
        <h2 className="text-centre ">{heading}</h2>
        <p className="lg:w-5/12 pt-4">
          {description}
        </p>
        <div className='pt-8'>
            <Button type={type} size={size} label={label} />
        </div>
      </div>
  )
}

export default ConnectChoose