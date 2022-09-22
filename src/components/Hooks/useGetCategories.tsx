import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../queries';
import { CategoriesQueryData, Categories } from '../../types';

export function useGetCategories () {
  return useQuery<CategoriesQueryData>(GET_CATEGORIES);
}
