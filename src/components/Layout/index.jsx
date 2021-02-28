import React from 'react'
import { Helmet } from 'react-helmet'
import { Title } from '../../pages/styles'

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <div>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  </>
)
