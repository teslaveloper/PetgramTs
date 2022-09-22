import React from 'react';
import { useParams } from 'react-router-dom'
import { PhotoCard } from '../components/ListOfPhotoCards/PhotoCard';
import { useGetPhoto } from '../components/Hooks/useGetPhoto'

export const PhotoCardContainer = () => {
  const params = useParams();
  const id = params.id !== undefined ? parseInt(params.id) : null;
	const { loading, data, error } = useGetPhoto(id)

  if (loading) return <p>Loading PCC...</p>;
  if (error) return <p>Error</p>;
  if (!data?.photo) return null;

  const { photo } = data;

  return (
    <PhotoCard {...photo} />
  )
}
