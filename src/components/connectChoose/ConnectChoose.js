import Link from 'next/link'
import React from 'react'
import Button from '../form/button/Button'

function ConnectChoose({ heading, description, type, size, label , href }) {
  return (
    <div className="container mx-auto py-16 px-4 md:px-0">
      <h2 className="text-centre text-5xl leading-snug">{heading}</h2>
      <p className="lg:w-5/12 pt-4">
        {description}
      </p>
      <div className='pt-8'>
        <Link href={href} >
          <Button type={type} size={size} label={label} />
        </Link>
      </div>
    </div>
  )
}

export default ConnectChoose