import React from 'react'
import LinkButton from '../Link/Link'

export default function Blogpage({ cards, hasIcon, label }) {
  return (
    <div className='pt-32 lg:px-28 px-10'>
      {cards && cards.map((item, index) => (
        <div key={index} className="lg:flex items-start pb-32 ">
          <div className="lg:w-2/5">
            <img className="w-96 h-auto rounded-3xl " src={item.image} />
          </div>
          <div className="w-ful ">
            <div>
              <h4>{item.heading}</h4>
            </div>
            <div className="pt-4">
              <div className="flex gap-4">
                <img className="w-8" src={item.profil} />
                <p className="w-15">{item.name}</p>
              </div>
            </div>
            <div className="pt-7">
              <LinkButton label={label} hasIcon={hasIcon} href={item.href} />
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

