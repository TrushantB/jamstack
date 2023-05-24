import Layout from '@/components/layout'
import React from 'react'

export default function blog({ header, footer }) {
  return (
    <Layout header={header} footer={footer}>
      <h1>Blog page</h1>
    </Layout>
  )
}
