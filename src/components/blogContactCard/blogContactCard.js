import React from 'react'

export default function BlogContactCard({blogContactCard}) {

    console.log("blogContactCard===<<<<<<<<" , blogContactCard)
  return (

    <div className=''> 
    <div className='p-4  bg-slate-200 rounded-xl '>
        <div className=''>
            <img className='w-full h-full' src="blogContentCard.png" alt='blogContentCard' />
        </div>
        <div className='font-semibold text-2xl my-5'>
            {blogContactCard?.heading}
        </div>
        <div className='mt-11 font-semibold'>
            <a className='text-primary text-2xl' href='#'>
            {blogContactCard?.buttonLabel}
            </a>
        </div>
    </div>
</div>
  )
}