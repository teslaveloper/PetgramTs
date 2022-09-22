import React from 'react'
import {
  Article, ImgWrapper, Img, Button
} from './styles'
import {
  MdFavoriteBorder, MdFavorite
} from 'react-icons/md'
import { useStorage } from '../../Hooks/useStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'
import { useToggleLikePhotoMutation } from '../../Hooks/useToggleLikePhotoMutation';
import { LikeButton } from './LikeButton';
import { Link } from 'react-router-dom'

const DEFAULT_SRC = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

interface IProps {
  id: string;
  likes: number;
  src?: string;
}

export const PhotoCard: React.FC<IProps> = (props: IProps) => {
  const { id, likes, src } = props;
  const keyStorage = `like-${id}`
  const [ liked, setLiked ] = useStorage(keyStorage, false)
  const [ show, refElement ] = useNearScreen({})
  const [ likePhoto, { data, loading, error }] = useToggleLikePhotoMutation({id: id});

  const handleLikeButtonClick = () => {
    !liked && likePhoto();
    setLiked(!liked);
  };

  return (
    <Article ref={refElement}>
      {show &&
        <>
          <Link to={`/photo/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <LikeButton 
            liked={liked}
            likes={likes}
            onClick={handleLikeButtonClick}
          />
          
        </>}
    </Article>
  )
}
