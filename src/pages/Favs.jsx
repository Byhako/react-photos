import React from 'react'
import { FavsQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <Layout title='Favoritos' subtitle='Mis animales favoritos'>
    <FavsQuery />
  </Layout>
)
