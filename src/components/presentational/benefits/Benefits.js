import React from 'react'

function Benefits({heading , benefitsList}) {
  return (
    <div className=" flex flex-col lg:flex-row  p-5 pb-0 lg:pt-32">
        <div className=" lg:w-4/12">
          <h2 className="lg:w-8/12 mb-5">{heading}</h2>
        </div>

        <div className="lg:w-8/12">
          <div className=" ">
            {benefitsList && benefitsList?.map((item, index) => (
              <div key={index} className="border-t-4  border-tertiary  ">
                <div className="flex lg:ml-5 pt-5">
                  <div className=" flex justify-center gap-5 items-start">
                    <div className={`w-8 h-8 flex mx-auto mt-3 lg:ml-4 ${item.icon} bg-tertiary`}></div>
                    <div className='w-11/12 ml-auto'>
                    <h3 className={` mx-auto `}>{item.heading}</h3>
                    <p className="pb-8  pt-5">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Benefits