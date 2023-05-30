import React from 'react'
import Button from '../form/button/Button'
import Link from 'next/link';


const Cta = ({heading,label , href}) => {
  return (
    <div>
         <div className="flex flex-col bg-accent-100 justify-center items-center py-12 md:py-24">
        <h2 className="pb-7 text-center">{heading}</h2>
        <Link className='btn' href={href}>
          {label}
        </Link>
      </div>
    </div>
  )
}

export default Cta