import React from 'react'
import Button from '../form/button/Button'

function ConnectChoose({ heading, description, type, size, label }) {
  return (
    <div className="px-4 lg:pl-24 py-16">
      <h2 className="text-centre text-2xl lg:text-6xl">{heading}</h2>
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