import React from 'react'
import { GlobaStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <>
      <GlobaStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:detailId' />
      </Router>
      <NavBar />
    </>
  )
}
