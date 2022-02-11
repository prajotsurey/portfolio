import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 90%;
  max-width: 1500px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  align-items:center;
  max-width: ;
  margin-left: auto;
  margin-right: auto;
`

const WelcomeText = styled.h1`
  width: 20ch;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-top: -140px;

  font-size: calc(1.5rem + 1.5vw);

  @media(min-width:1200px) {
    font-size: 4rem;
  }
`


const HeroLandingSection = ({blok}) => {
  return(
    <HeroContainer>
      <WelcomeText className='fade-in'>
        {blok.greeting}<br/>
        {blok.introText}
      </WelcomeText>
    </HeroContainer>
  )
} 

export default HeroLandingSection