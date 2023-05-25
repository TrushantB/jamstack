import React from 'react'
import Button from '../form/button/Button'

function ConnectChoose({heading , description , type, size, label }) {
  return (
    <div className="border-t-2 border-b-2 border-red-600 pb-32 lg:pl-24 pt-32">
        <h2 className=" ">{heading}</h2>
        <p className="w-5/12 pt-4">
          {description}
        </p>
        <div className='pt-8'>
            <Button type={type} size={size} label={label} />
        </div>
      </div>
  )
}

export default ConnectChoose