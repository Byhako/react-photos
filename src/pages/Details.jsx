import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Details = ({ detailId }) => (
  <Layout title='Detalles' subtitle='detalles de animal'>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
