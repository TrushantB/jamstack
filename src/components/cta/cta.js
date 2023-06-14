import React from 'react'
import Button from '../form/button/Button'
import Link from 'next/link';


const Cta = ({heading,label , href,isInner=false}) => {
  return (
    <div className='container'>
         <div className={`flex flex-col bg-accent-100 justify-center py-12 md:py-24 ${isInner?'items-start ':' items-center '}`}>
        <h2 className="pb-7 ">{heading}</h2>
        <Link className='btn' href={href}>
          {label}
        </Link>
      </div>
    </div>
  )
}

export default Cta