import React from 'react'
import { GlobaStyles } from './GlobalStyles'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCards } from './components/ListPhotoCards'

export const App = () => {
  return (
    <>
      <GlobaStyles />
      <ListCategories />
      <ListPhotoCards />
    </>
  )
}
