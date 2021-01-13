import React from 'react'
import { GlobaStyles } from './GlobalStyles'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCards } from './components/ListPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <>
      <GlobaStyles />
      <Logo />
      <ListCategories />
      <ListPhotoCards />
    </>
  )
}
