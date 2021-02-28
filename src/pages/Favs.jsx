import React from 'react'
import { FavsQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <Layout title='Favoritos' subtitle='Mis animales favoritos'>
    <FavsQuery />
  </Layout>
)

export default Favs
