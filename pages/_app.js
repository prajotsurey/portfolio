import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src:url("/fonts/Roboto-Thin.ttf");
    font-weight: 100;
    font-style: regular;
  }
  @font-face {
    font-family: 'Roboto';
    src:url("/fonts/Roboto-Light.ttf");
    font-weight: 300;
    font-style: regular;
  }
  @font-face {
    font-family: 'Roboto';
    src:url("/fonts/Roboto-Regular.ttf");
    font-weight: 400;
    font-style: regular;
  }
  @font-face {
    font-family: 'Roboto';
    src:url("/fonts/Roboto-Medium.ttf");
    font-weight: 500;
    font-style: regular;
  }
  @font-face {
    font-family: 'Roboto';
    src:url("/fonts/Roboto-Bold.ttf");
    font-weight: 700;
    font-style: regular;
  }
  @font-face {
    font-family: 'Merriweather Sans';
    src:url("/fonts/MerriweatherSans-Regular.ttf");
    font-weight: 400;
    font-style: regular;
  }
  @font-face {
    font-family: 'Merriweather Sans';
    src:url("/fonts/MerriweatherSans-Light.ttf");
    font-weight: 300;
    font-style: regular;
  }

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
          <link key="icon" rel="icon" type="image/png" href="/32x32.png" sizes="32x32"/>
          <link key="icon" rel="icon" type="image/png" href="/192x192.png" sizes="192x192"/>
          <title>Prajot Surey</title>
          <meta name="description" content="Prajot Surey's portfolio website. Prajot Surey is a web developer based in India." />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}