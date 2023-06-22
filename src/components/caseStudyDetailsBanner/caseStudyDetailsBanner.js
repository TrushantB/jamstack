import Link from 'next/link'
import React from 'react'

export default function CaseStudyDetailsBanner({ caseStudyData }) {
    return (
        <>
            <div className='max-w-3xl mx-auto px-3 py-6 mt-3'>
                {/* BreadCrumb ::start */}

                <nav class="flex mb-2 text-xs" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link href="/" class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-primary">
                                <svg aria-hidden="true" class="w-4 h-4 mr-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <Link href="/case-study" class="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-primary">Case study</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400 dark:hover:text-primary truncate max-w-[20ch] md:max-w-none">{caseStudyData?.heading}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* BreadCrumb ::end */}
                <div className='mb-4'>
                    <h1 className='lg:w-full'>
                        {caseStudyData?.heading}
                    </h1>
                </div>
                <div className="flex flex-wrap items-start gap-3 md:gap-8 mb-10">
                    {
                        caseStudyData?.client &&
                        <div className="flex flex-col items-start md:justify-center gap-2">
                            <span className='text-xs text-gray-500'>Client</span>
                            <a href='#' className='flex items-center gap-2 hover:text-primary transition ease-in delay-50 font-medium text-sm'>
                                <span>{caseStudyData?.client}</span>
                            </a>
                        </div>
                    }
                    {
                        caseStudyData?.client &&
                        <div className="flex flex-col items-start md:justify-center gap-2">
                            <span className='text-xs text-gray-500'>Year</span>
                            <a href='#' className='flex items-center gap-2 hover:text-primary transition ease-in delay-50 font-medium text-sm'>
                                <span>{caseStudyData?.year}</span>
                            </a>
                        </div>
                    }
                    {
                        caseStudyData?.client &&
                        <div className="flex flex-col items-start md:justify-center gap-2">
                            <span className='text-xs text-gray-500'>Timeline</span>
                            <a href='#' className='flex items-center gap-2 hover:text-primary transition ease-in delay-50 font-medium text-sm'>
                                <span>{caseStudyData?.timeline}</span>
                            </a>
                        </div>
                    }
                    {
                        caseStudyData?.client &&
                        <div className="flex flex-col items-start md:justify-center gap-2">
                            <span className='text-xs text-gray-500'>Services</span>
                            <a href='#' className='flex items-center gap-2 hover:text-primary transition ease-in delay-50 font-medium text-sm'>
                                <span>{caseStudyData?.service}</span>
                            </a>
                        </div>
                    }
                    {
                        // caseStudyData?.year?.date &&
                        // <div className="flex flex-col items-start md:justify-center gap-2">
                        //     <span className='text-xs text-gray-500'>year</span>
                        //     <div className='font-medium text-sm'>
                        //         {/* <img src={caseStudyData?.publishDate?.icon} alt={caseStudyData?.publishDate.alt} /> */}
                        //         <span>{caseStudyData?.year?.date}</span>
                        //     </div>
                        // </div>
                    }
                    {/* <div className="flex items-center md:justify-center gap-2">
                        <div>
                            <img src={caseStudyData?.screnTime?.icon} alt={caseStudyData?.screnTime?.alt} />
                        </div>
                        <div>
                            {caseStudyData?.screnTime?.duration}
                        </div>
                    </div> */}
                </div>
                <div>
                    <img className='w-full h-auto max-h-[780px] rounded-3xl' src={caseStudyData?.blogBanner} alt={caseStudyData?.alt} />
                </div>
            </div>
        </>
    )
}
