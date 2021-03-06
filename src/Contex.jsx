import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => (window.sessionStorage.token))

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(token)
    },
    removeAuth: () => {
      window.sessionStorage.removeItem('token')
      setIsAuth('')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
