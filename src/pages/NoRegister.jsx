import React from 'react'
import Context from '../Contex'
import { USerForm } from '../components/UserForm'

export const NoRegister = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => (
          <USerForm onSubmit={activateAuth} />
        )
      }
    </Context.Consumer>
  )
}
