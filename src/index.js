import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Contex'

const client = new ApolloClient({
  uri: 'https://petgram-api-ruben.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.token
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error) => {
    const { nerworkError } = error
    if (nerworkError && nerworkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/user'
    }
  }
})

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
