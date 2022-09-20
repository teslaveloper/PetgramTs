import React from 'react';
import { GlobalStyles } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCardsContainer'

const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCardsContainer/>
  </>
)

export default App



