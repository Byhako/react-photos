import React, { useContext } from 'react'
import { Context } from '../Contex'
import { Button } from './styles'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario'>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </Layout>
  )
}
