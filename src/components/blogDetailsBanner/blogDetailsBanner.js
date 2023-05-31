import React from 'react'

export default function BlogDetailsBanner({blogData}) {

    console.log("blogData===>" , blogData?.blogBanner)

  return (
    <>
        <div className='max-w-3xl mx-auto px-3 mt-3'>
            <div className='py-6'>
                <h1 className='lg:w-full'>
                    {blogData?.heading}
                </h1>
            </div>            
              <div className="flex flex-wrap items-center gap-3 md:gap-8 mb-10">
                <div className="flex items-center md:justify-center gap-2">
                    <a href='#' className='flex gap-2'>
                        <img className='w-6 h-6' src={blogData?.author?.image} alt={blogData?.author?.alt} />
                        <span>{blogData?.author?.name}</span>
                    </a>
                </div>
                <div className="flex items-center md:justify-center gap-2">
                    <div>
                        <img src={blogData?.publishDate?.icon} alt={blogData?.publishDate.alt} />
                    </div>
                    <div>
                    {blogData?.publishDate?.date}
                    </div>
                </div>
                <div className="flex items-center md:justify-center gap-2">
                    <div>
                        <img src={blogData?.screnTime?.icon} alt={blogData?.screnTime?.alt}/>
                    </div>
                    <div>
                    {blogData?.screnTime?.duration}
                    </div>
                </div>
          
            </div>
            <div>
                <img className='w-full h-auto max-h-[780px]' src={blogData?.blogBanner} alt={blogData?.alt} />
            </div>
        </div>
    </>
  )
}
