import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

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
