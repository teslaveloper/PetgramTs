import { useQuery } from '@apollo/client';
import { GET_PHOTO } from '../../queries';


export function useGetPhoto(id: number | null) {
  // console.log('hook useGetPhoto id', id);
  return useQuery(
    GET_PHOTO,
    { variables: { id: id } }
  );
}
