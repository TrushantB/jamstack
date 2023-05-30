import React from 'react'
import Button from '../form/button/Button'
import Link from 'next/link'


const ModernTechnologyOne = ({ heading, label, size, type, href }) => {
  return (
    <div className="bg-secondary flex flex-col items-center pt-12 md:pt-24 pb-16 md:pb-24">
      <h3 className="text-center text-white w-11/12 ">
        {heading}
      </h3>
      {label && <div className='pt-8 md:pt-16'>
        <Link className='btn' href={href} >
          {label}
        </Link>
      </div>}
    </div>
  )
}

export default ModernTechnologyOne;
