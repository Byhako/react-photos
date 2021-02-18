import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const USerForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit} id='userForm'>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
