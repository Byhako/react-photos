import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListPhotoCards } from '../components/ListPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Fotos' subtitle='Fotos de animales'>
      <ListCategories />
      <ListPhotoCards categoryId={id} />
    </Layout>
  )
}
