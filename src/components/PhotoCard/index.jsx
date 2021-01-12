import React from 'react'
import { MdFavoriteBorder } from "react-icons/md"
import { Img, ImgWrapper, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt={id} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='24px' /> {likes} likes!
      </Button>
    </article>
  )
}
