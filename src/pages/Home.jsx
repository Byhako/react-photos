import React from 'react'
import { ListCategories } from '../components/ListCategories'
import { ListPhotoCards } from '../components/ListPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
      <ListCategories />
      <ListPhotoCards categoryId={id} />
    </>
  )
}
