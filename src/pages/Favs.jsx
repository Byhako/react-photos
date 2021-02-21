import React from 'react'
import { FavsQuery } from '../container/GetFavorites'
import { Title } from './styles'

export const Favs = () => {
  return (
    <>
      <Title>Mis Favoritos</Title>
      <FavsQuery />
    </>
  )
}
