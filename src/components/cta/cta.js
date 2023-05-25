import React from 'react'
import Button from '../form/button/Button'

const Cta = () => {
  return (
    <div>
         <div className="flex flex-col bg-accent-100 justify-center items-center">
        <h2 className="text-4xl py-20 ">Excited to switch to ecommJ?</h2>
        <Button label={heading} />
      </div>
    </div>
  )
}

export default Cta