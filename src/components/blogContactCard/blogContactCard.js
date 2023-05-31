import React from 'react'

export default function BlogContactCard({suggestionPost}) {

    console.log("govind--->" , suggestionPost)
    console.log("imageeeeee--->" , suggestionPost?.image)

  return (

    <div className=''> 
    <div className='p-4 bg-slate-200 rounded-xl'>
        <a className='block' href='#'>
            <img className='w-full h-full' src={suggestionPost?.image} alt={suggestionPost?.alt} />
        </a>
        <h5 className='font-semibold text-lg my-5'>
            {suggestionPost?.title}
        </h5>
        <div className='font-semibold'>
            <a className='text-primary text-2xl' href='#'>
            {suggestionPost?.buttonLabel}
            </a>
        </div>
    </div>
</div>
  )
}