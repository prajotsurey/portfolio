import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 90%;
  max-width: 1600px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items:center;
  max-width: ;
  margin-left: auto;
  margin-right: auto;
`

const WelcomeText = styled.div`
  font-size: 4rem;
  max-width: 20ch;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`


const HeroLandingSection = ({blok}) => {
  return(
    <HeroContainer>
      <WelcomeText>
        {blok.welcomeText}
      </WelcomeText>
    </HeroContainer>
  )
} 

export default HeroLandingSection