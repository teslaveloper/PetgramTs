import React from 'react'
import {
  Article, ImgWrapper, Img, Button
} from './styles'
import {
  MdFavoriteBorder, MdFavorite
} from 'react-icons/md'
import { useStorage } from '../Hooks/useStorage'
import { useNearScreen } from '../Hooks/useNearScreen'

const DEFAULT_SRC = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_SRC
}: { id: string, likes: number, src: string}) => {
  const keyStorage = `like-${id}`
  const [ liked, setLiked ] = useStorage(keyStorage, false)
  const [ show, refElement ] = useNearScreen({})
  const LikeIcon = liked === true ? <MdFavorite size='32px' /> : <MdFavoriteBorder size='32px' />

  return (
    <Article ref={refElement}>
      {show &&
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            {LikeIcon}
            {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
