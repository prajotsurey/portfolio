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
  font-size: 4rem;
  max-width: 20ch;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-top: -140px;
`


const HeroLandingSection = ({blok}) => {
  return(
    <HeroContainer>
      <WelcomeText className='fade-in'>
        {blok.welcomeText}
      </WelcomeText>
    </HeroContainer>
  )
} 

export default HeroLandingSection