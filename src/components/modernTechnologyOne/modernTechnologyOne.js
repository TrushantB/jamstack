import React from 'react'
import Button from '../form/button/Button'
import Link from 'next/link'


const ModernTechnologyOne = ({ heading, label, size, type, href }) => {
  return (
    <div className="bg-secondary pt-12 lg:pt-24 pb-16 lg:pb-24">
      <div className='container mx-auto flex flex-col items-center'>
        <h3 className="text-center text-white w-11/12 ">
          {heading}
        </h3>
        {label && <div className='pt-8 lg:pt-16'>
          <Link className='btn' href={href} >
            {label}
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default ModernTechnologyOne;
