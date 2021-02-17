import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const USerForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input type='email' placeholder='Email' {...email} />
      <input type='password' placeholder='password' {...password} />
      <button>Iniciar sesión</button>
    </form>
  )
}
