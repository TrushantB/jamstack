import Layout from '@/components/layout'
import React from 'react'

function security({ header, footer }) {
  return (
    <Layout header={header} footer={footer}>
      <div className='max-w-2xl xl:max-w-3xl mx-auto px-4'>
        <div className="page-title py-8">
          <h1>Security</h1>
        </div>      
        <div className='text-page-content max-w-3xl mx-auto pb-12'>
          <p>Coming soon..</p>
        </div>
      </div>
    </Layout>
  )
}

export default security