import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotosQueryData, PhotoVariables } from '../../types'

const PHOTOS_QUERY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      userId
      src
      likes
    }
  }
`;

export function useGetPhotos (category_id: number) {
  return useQuery<PhotosQueryData, PhotoVariables>(
    PHOTOS_QUERY,
    { variables: { categoryId: category_id } }
  );
}
