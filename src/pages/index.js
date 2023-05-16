import Image from 'next/image'
import Layout from '@/components/layout'

export default function Home() {
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
    </Layout>
  )
}
