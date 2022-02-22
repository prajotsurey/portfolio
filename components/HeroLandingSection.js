import React from 'react'
import styled from 'styled-components'
import Totoro from './Totoro'

const HeroContainer = styled.section`
  width: 80%;
  max-width: 1500px;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column-reverse;
  align-items:center;
  margin-left: auto;
  margin-right: auto;
  margin: 4rem auto;
  justify-content: flex-end;

  @media(min-width:800px) {
    flex-direction: row;
    margin: 0px auto;
    justify-content:center;
  }
`

const WelcomeSection = styled.div`
  margin-top: 5rem;
  max-width: 100%;
  @media(min-width:800px) {
    margin-top: -140px;
  }
`

const WelcomeText = styled.h1`
  width: 20ch;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: calc(1.5rem + 1.5vw);
  flex-shrink:0;
  margin-bottom: 0px;

  @media(min-width:1200px) {
    font-size: 4rem;
  }
`

const WelcomeSubText = styled.p`
  margin-top: 1rem;
  max-width:50ch;
  font-size: clamp(1rem, 0.9rem + 1vw, 1.3rem);
  line-height: 1.3em;

  @media(min-width:800px) {
    margin-right: 1rem;
  }

  @media(min-width:1200px) {
    font-size: 1.4rem;
  }
`

const TotoroContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width: 80%;
  @media(min-width:800px) {
    margin-top: -140px;
    flex-grow:1;
  }
`


const HeroLandingSection = ({blok}) => {
  return(
    <HeroContainer>
      <WelcomeSection className='fade-in'>
        <WelcomeText>
          {blok.greeting}<br/>
          {blok.introText}
        </WelcomeText>
        <WelcomeSubText>
          {blok.moreIntroText}
        </WelcomeSubText>
      </WelcomeSection>
      <TotoroContainer>
        <Totoro />
      </TotoroContainer>
    </HeroContainer>
  )
} 

export default HeroLandingSection