import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

const ListPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} {...photo} />
        </li>
      ))}
    </ul>
  )
}

export const ListPhotoCards = withPhotos(ListPhotoCardsComponent)
