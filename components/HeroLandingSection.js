import React from 'react'
import styled from 'styled-components'
import Totoro from './Totoro'

const HeroContainer = styled.section`
  width: 90%;
  max-width: 1500px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column-reverse;
  align-items:center;
  justify-content:center;
  margin-left: auto;
  margin-right: auto;
  
  @media(min-width:600px) {
    flex-direction: row;
  }
`

const WelcomeText = styled.h1`
  width: 20ch;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: calc(1.5rem + 1.5vw);
  flex-shrink:0;
  @media(min-width:600px) {
    margin-top: -140px;
  }

  @media(min-width:1200px) {
    font-size: 4rem;
  }
`

const TotoroContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width: 80%;
  @media(min-width:600px) {
    margin-top: -140px;
    flex-grow:1;
  }
`


const HeroLandingSection = ({blok}) => {
  return(
    <HeroContainer>
      <WelcomeText className='fade-in'>
        {blok.greeting}<br/>
        {blok.introText}
      </WelcomeText>
      <TotoroContainer>
        <Totoro />
      </TotoroContainer>
    </HeroContainer>
  )
} 

export default HeroLandingSection