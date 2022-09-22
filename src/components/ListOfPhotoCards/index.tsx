import React from 'react'
import { PhotoCard } from '../ListOfPhotoCards/PhotoCard'
import { Photos } from '../../types'
import { useGetPhotos } from '../Hooks/useGetPhotos'

interface IProps {
  categoryId?: number
}

const ListOfPhotoCardsComponent: React.FC<IProps> = (props: IProps) => {
  const { loading, data } = useGetPhotos(props.categoryId)

  if (!data?.photos) return null;

  const { photos } = data;

  return (
    <>
      {photos?.map((photo: any) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </>
  )

}

export default ListOfPhotoCardsComponent;
