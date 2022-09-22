import React from 'react'
import { ListOfCategories } from 'components/ListOfCategories'
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer'
import { useParams } from 'react-router-dom'

export const Home = () => {
	const params = useParams();
	const id = params.id !== undefined ? parseInt(params.id) : undefined;

	return (
		<>
		  <ListOfCategories />
		  <ListOfPhotoCardsContainer categoryId={id} />
		</>
	)
}