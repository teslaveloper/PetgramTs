import React from 'react';
import {
  Clink, Image
} from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';


interface IProps {
  cover?: string;
  path: string;
  emoji: string;
}


export const Category: React.FC<IProps> = (props: IProps) => {
  const { cover, path, emoji } = props

  return (
    <Clink to={path}>
      <Image src={cover} />
      {emoji}
    </Clink>
  )
}
