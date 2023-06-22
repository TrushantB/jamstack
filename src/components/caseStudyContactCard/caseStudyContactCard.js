import React from 'react'

export default function CaseStudyContactCard({caseStudyData}) {

  return (

    <div className=''> 
    <div className='p-4 bg-slate-200 rounded-xl'>
        <a className='block' href='#'>
            <img className='w-full h-full' src={caseStudyData?.suggestionPost?.image} alt={caseStudyData?.suggestionPost?.alt} />
        </a>
        <h5 className='font-semibold text-base my-5'>
            {caseStudyData?.suggestionPost?.title}
        </h5>
        <div className='font-semibold'>
            <a className='text-primary text-2xl' href='#'>
            {caseStudyData?.suggestionPost?.buttonLabel}
            </a>
        </div>
    </div>
</div>
  )
}