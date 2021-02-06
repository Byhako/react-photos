import React from 'react'
import Context from '../Contex'

export const NoRegister = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        )
      }
    </Context.Consumer>
  )
}
