import React, { useContext } from 'react'
import { Context } from '../Contex'
import { Title, Button } from './styles'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Title>Usuario</Title>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  )
}
