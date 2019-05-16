import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Header from './Header'

function Layout(props) {

  const _onChangeLanguage = (language) => {
    console.log(language)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Aether</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {props.children}
    </React.Fragment>
  )
}

export default Layout