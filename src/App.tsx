import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { GlobalStyles } from './components/styles/GlobalStyles'
import { Logo } from 'components/Logo';
import { NavBar } from 'components/NavBar';
import { Home } from 'components/pages/Home';
import { Detail } from 'components/pages/Detail';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />

      <Link to={`/`}> <Logo /> </Link>
      <Routes>
        <Route path="/category/:id" element={< Home />}/>
        <Route path="/photo/:id" element={< Detail />} />
        <Route path="/" element={< Home />}/>
      </Routes>
    </ BrowserRouter>
  </React.StrictMode>
)

export default App



