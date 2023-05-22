import React from 'react'

function Benefits({heading , benefitsList}) {
  return (
    <div className=" flex flex-col lg:flex-row  p-10 pb-0 lg:pt-32">
        <div className=" lg:w-5/12">
          <h3 className="lg:w-5/12 mb-5">{heading}</h3>
        </div>

        <div className="lg:w-7/12">
          <div className="lg:pl-28 lg:py-16">
            {benefitsList && benefitsList?.map((item, index) => (
              <div key={index} className="border-t-4  ">
                <div className="flex gap-5 pt-5">
                  <div className="pl-12">
                    <h3 className={`${item.icon} relative`}>{item.heading}</h3>
                    <p className="pb-8  pt-5">{item.description}</p>
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