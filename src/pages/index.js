import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import { get } from '@/client/api'

export default function Home() {
  const [homePageData, setHomePageData] = useState(null);
  useEffect(() => {
    get('home').then((response) => {
      setHomePageData(response)
    });
  }, [])
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Jamstack+.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {homePageData?.title && <div className='text-center m-5'>{homePageData?.title}</div>}
    </Layout>
  )
}
