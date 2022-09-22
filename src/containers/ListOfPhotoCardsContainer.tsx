// import { withPhotos } from '../components/Hoc/withPhotos'
import ListOfPhotoCardsComponent from '../components/ListOfPhotoCards'

interface IProps {
  categoryId?: number;
}

export const ListOfPhotoCardsContainer: React.FC<IProps> = (props: IProps) => {
  return (
    <ListOfPhotoCardsComponent categoryId={props.categoryId} />
  )
}
