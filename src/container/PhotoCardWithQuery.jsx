import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>error</p>

  const { photo } = data ?? {}
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
