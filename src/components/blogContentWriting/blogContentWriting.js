import React from 'react'

export default function BlogContentWriting() {
  return (
    <>  
        <div className='px-3'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-8 my-6'>
                <div className='md:w-1/5'>
                    <img className='max-h-36 max-w-36' src='clientPage.png' alt='clientPage' />
                </div>
                <div className='md:w-4/5'>
                    <div className='flex items-center justify-between my-4 md:mt-0 md:mb-4'>
                        <div>
                            Ivan Krizaj
                        </div>
                        <div>
                            <ul className='flex gap-6'>
                                <li>
                                    <a href='#' target='_blank'>
                                        <i className='icon-twitter '>

                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' target='_blank'>
                                        <i className='icon-facebook2'>

                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' target='_blank'>
                                        <i className='icon-linkedin' >
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        Ivan Krizaj is Hygraph's Head of Developer Relations. He has a strong passion for developer education and experience as well as decoupled architectures, frontend development, and clean design.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
