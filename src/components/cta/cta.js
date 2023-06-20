import React from 'react'
import Button from '../form/button/Button'
import Link from 'next/link';


const Cta = ({heading,label , href,isInner=false}) => {
  return (
    <div className='container mx-auto px-6'>
         <div className={`flex flex-col bg-accent-100 justify-center py-12 lg:py-24 ${isInner?'items-start ':' items-center '}`}>
        <h2 className="pb-5 lg:pb-7 text-center lg:text-left">{heading}</h2>
        <Link className='btn' href={href}>
          {label}
        </Link>
      </div>
    </div>
  )
}

export default Cta