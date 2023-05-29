import React from 'react'

export default function BlogDetailsBanner() {
  return (
    <>
        <div className='container mx-auto px-3 mt-3'>
            <h1 className='lg:w-3/5'>
                Governance by human-
                centered design
            </h1>
            <div className="md:flex items-center gap-3 md:gap-8 my-10">
                <div className="flex items-center md:justify-center gap-2 mb-6 md:mb-0 ">
                    <div>
                        <img className='w-6 h-6' src="clientPage.png" alt="clientPagePerson" />
                    </div>
                    <div>
                        Ivan Krizaj
                    </div>
                </div>
                <div className="flex items-center md:justify-center gap-2 mb-6 md:mb-0 ">
                    <div>
                        <img src='calendar.png' alt='calendar' />
                    </div>
                    <div>
                        27, FEB 2023
                    </div>
                </div>
                <div className="flex items-center md:justify-center gap-2 ">
                    <div>
                        <img src='clock.png' alt='clock'/>
                    </div>
                    <div>
                        2 Mins
                    </div>
                </div>
          
            </div>
            <div>
                <img className='w-full h-auto max-h-[780px]' src='blogDetailsBanner.png' alt='blogDetailsBanner' />
            </div>
        </div>
    </>
  )
}
