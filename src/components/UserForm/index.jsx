import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error, Loader } from './styles'

export const USerForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={loading} onSubmit={handleSubmit} id='userForm'>
        <Input disabled={loading} type='email' placeholder='Email' {...email} />
        <Input disabled={loading} type='password' placeholder='password' {...password} />
        <Button disabled={loading}>{title}</Button>
        {loading && <Loader>Loading...</Loader>}
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
