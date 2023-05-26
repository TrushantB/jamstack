import React from 'react'
import Button from '../form/button/Button'

const ModernTechnologyOne = ({heading , label , size , type}) => {
  return (
    <div className=" bg-secondary flex flex-col items-center  pt-24 pb-32">
    <h3 className="text-center text-white w-11/12 ">
      {heading}
    </h3>
    { label && <div className='pt-16'>
      <Button 
        label={label}
        type={type}
        size={size}
      />
    </div>}
  </div>
  )
}

export default ModernTechnologyOne