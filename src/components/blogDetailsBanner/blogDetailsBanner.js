import React from 'react'

export default function BlogDetailsBanner({blogData}) {

    console.log("blogData===>" , blogData?.blogBanner)

  return (
    <>
        <div className='container mx-auto px-3 mt-3'>
            <h1 className='lg:w-3/5'>
                {blogData?.heading}
            </h1>
            <div className="md:flex items-center gap-3 md:gap-8 my-10">
                <div className="flex items-center md:justify-center gap-2 mb-6 md:mb-0 ">
                    <div>
                        <img className='w-6 h-6' src={blogData?.author?.image} alt={blogData?.author?.alt} />
                    </div>
                    <div>
                        {blogData?.author?.name}
                    </div>
                </div>
                <div className="flex items-center md:justify-center gap-2 mb-6 md:mb-0 ">
                    <div>
                        <img src={blogData?.publishDate?.icon} alt={blogData?.publishDate.alt} />
                    </div>
                    <div>
                    {blogData?.publishDate?.date}
                    </div>
                </div>
                <div className="flex items-center md:justify-center gap-2 ">
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
