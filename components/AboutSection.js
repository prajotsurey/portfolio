import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'

const SubHeading = styled.h3`
  font-size: 2rem;
`

const AboutText = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  max-width: 60ch;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1.1rem;
  margin-bottom: 10rem;
`


const AboutSection = ({blok}) => {
  
  return(
    <SectionContainer>
      <SectionHeading>
        {blok.heading}
      </SectionHeading>
      <SubHeading>
        {blok.subHeading}
      </SubHeading>
      <AboutText>
        {blok.text}
        <br/>
        <br/>
        {blok.text2}
      </AboutText>
    </SectionContainer>
  )
} 

export default AboutSection