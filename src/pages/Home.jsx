import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListPhotoCards } from '../components/ListPhotoCards'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - fotos</title>
        <meta name='description' content='Fotos de animales' />
      </Helmet>
      <ListCategories />
      <ListPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevPros, props) => {
  return prevPros.id === props.id
})
// Lo recuerda si las props anteriores son iguales a las actules
