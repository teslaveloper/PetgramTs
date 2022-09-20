import { gql } from '@apollo/client'
import { ChildDataProps, graphql } from "@apollo/client/react/hoc";
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

// type ChildProps = ChildDataProps<PhotosQueryData, PhotoVariables>;

export const withPhotos = graphql<PhotosQueryData, PhotoVariables>(PHOTOS_QUERY, {
  options: (ownProps: any) => ({
    variables: { category_id: ownProps?.categoryId}
  }),
  props: ({data}) => {
    return {
      data
    }
  }
});
