import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'

const SubHeading = styled.h3`
  font-size: 2rem;
`

const SubHeading2 = styled(SubHeading)`
  margin-top: 4rem;
`

const AboutText = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  max-width: 60ch;
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1.1rem;
`

const AboutText2 = styled(AboutText)`
  margin-bottom: 10rem;
`


const AboutSection = ({blok}) => {
  
  return(
    <SectionContainer>
      <SectionHeading id="about">
        {blok.heading}
      </SectionHeading>
      <div>
        <SubHeading >
          {blok.subHeading}
        </SubHeading>
        <AboutText className='fade-in'>
          {blok.text}
          <br/>
          <br/>
          {blok.text2}
        </AboutText>
        <SubHeading2 className='fade-in'>
          MY SKILLSET
        </SubHeading2>
        <AboutText2 className='fade-in'>
          {blok.skillSet}
        </AboutText2>
      </div>
    </SectionContainer>
  )
} 

export default AboutSection