import React, { useState } from 'react'
import Context from '../Contex'
import { USerForm } from '../components/UserForm'
import styled from 'styled-components'
import { RegisterMutation } from '../container/RegisterMutation'

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    color: #222;
    margin: 0
  }
  span {
    cursor: pointer;
    color: #b700b1;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const NoRegister = () => {
  const [state, setState] = useState(false)
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => (
          state
            ? <>
              <RegisterMutation>
                {
                  (register, { loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }
                    const errorMsg = error && 'El usuario ya existe.'
                    return (
                      <USerForm
                        onSubmit={onSubmit}
                        title='Registrarse'
                        error={errorMsg}
                        loading={loading}
                      />
                    )
                  }
                }
              </RegisterMutation>
              <Div>
                <p>¿Ya tienes una cuenta?</p>
                <span onClick={() => setState(false)}>Inicia sesión</span>
              </Div>
            </>
            : <>
              <USerForm onSubmit={activateAuth} title='Iniciar sesión' />
              <Div>
                <p>¿No tienes una cuenta?</p>
                <span onClick={() => setState(true)}>Registrate</span>
              </Div>
            </>
        )
      }
    </Context.Consumer>
  )
}
