import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100%;
    min-width: 100%;
    font-family: 'Roboto', sans-serif;
    color:black;
    background:#f9dd91;
  }

  html {
    min-height: 100%;
    min-width: 100%;
  }

  main{
    background:#f9dd91;
  }

  .fade-in{
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fade-in.appear {
    opacity: 1;
    transform: translateY(0px);
  }

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" /> 
          <link key="icon" rel="icon" type="image/png" href="/32x32.png" sizes="32x32"/>
          <link key="icon" rel="icon" type="image/png" href="/192x192.png" sizes="192x192"/>
          <title>Prajot Surey</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}