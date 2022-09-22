import React from 'react';
import {
  MdFavoriteBorder, MdFavorite
} from 'react-icons/md'
import { Button } from './styles'

interface IProps {
  liked: Boolean;
  onClick: () => void;
  likes: Number;
}

export const LikeButton: React.FC<IProps> = (props: IProps) => {
	const {liked, onClick, likes } = props;

	const LikeIcon = liked === true ? <MdFavorite size='32px' /> : <MdFavoriteBorder size='32px' />

	return (
		<Button onClick={onClick}>
	    {LikeIcon}
	    {likes} likes!
	  </Button>
	)
}