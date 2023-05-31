import React from 'react'

export default function BlogContactCard({blogContactCard}) {

    console.log("blogContactCard===<<<<<<<<" , blogContactCard)
  return (

    <div className=''> 
    <div className='p-4 bg-slate-200 rounded-xl'>
        <a className='block' href='#'>
            <img className='w-full h-full' src="blogContentCard.png" alt='blogContentCard' />
        </a>
        <h5 className='font-semibold text-lg my-5'>
            {blogContactCard?.heading}
        </h5>
        <div className='font-semibold'>
            <a className='text-primary text-2xl' href='#'>
            {blogContactCard?.buttonLabel}
            </a>
        </div>
    </div>
</div>
  )
}