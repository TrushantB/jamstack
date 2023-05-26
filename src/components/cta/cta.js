import React from 'react'
import Button from '../form/button/Button'

const Cta = ({heading,label}) => {
    console.log(heading,label);
  return (
    <div>
         <div className="flex flex-col bg-accent-100 justify-center items-center py-24">
        <h2 className="  pb-7 text-center  ">{heading}</h2>
        <Button label={label} />
      </div>
    </div>
  )
}

export default Cta