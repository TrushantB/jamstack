import React from 'react'

function TextBannerList({heading, title, listItems }) {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
          <div className="grid grid-col-1 lg:grid-cols-2">
            <div className="">
              <h2 className="p-5 text-white lg:p-11 lg:pl-24 sm:p-10">{heading}</h2>
            </div>

            <div className="p-5 bg-accent-100 sm:p-10 lg:p-11 lg:pl-20 rounded-t-3xl lg:rounded-r-none lg:rounded-l-3xl">
              <h4 className="mb-14 bg-grey">{title}</h4>
              <div>
                { listItems && listItems?.map((item , index) => (
                  <div key={index}>
                    <ul>
                      <li className="flex gap-4 p-2">
                        <div className={`${item.icon} w-5 h-5 bg-tertiary `}></div>
                      <div className={'w-42 h-30 font-bold '}>{item.label}</div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TextBannerList