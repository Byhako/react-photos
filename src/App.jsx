import React from 'react'
import { GlobaStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NoRegister } from './pages/NoRegister'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  const UserLogged = ({ children }) => {
    return children({ isAuth: false })
  }

  return (
    <>
      <GlobaStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Details path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NoRegister path='/favs' />
                <NoRegister path='/user' />
              </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
