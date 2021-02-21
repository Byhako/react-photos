import React from 'react'
import { Link, Grid, Img } from './styles'

export const ListFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav =>
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Img src={fav.src} />
          </Link>
        )
      }
    </Grid>
  )
}
