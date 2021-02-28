import React, { useContext } from 'react'
import { GlobaStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Redirect, Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NoRegister } from './pages/NoRegister'
import { NotFound } from './pages/NotFound'
import { Context } from './Contex'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobaStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:detailId' />
        {!isAuth && <NoRegister path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
