import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotosQueryData, PhotoVariables } from '../../types'
import { GET_PHOTOS } from '../../queries'

export function useGetPhotos (category_id: number | undefined) {
  return useQuery<PhotosQueryData, PhotoVariables>(
    GET_PHOTOS,
    { variables: { categoryId: category_id } }
  );
}
