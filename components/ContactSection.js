import React from 'react'
import styled from 'styled-components'
import ChibiTotoroAlternate from './ChibiTotoroAlternate'
import { MainColorSectionContainer, SectionContainer, SectionHeading, SectionHeadingContainer, SectionHeadingSvgContainer } from './styledComponents'

const SubHeading = styled.h3`
  font-size: 2rem;
`

const EmailText = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 60ch;
  font-weight: 400;
  line-height: 1.5rem;
  font-size: 1.5rem;
`

const BoldEmail = styled.a`
  font-weight: 700;
  color: black;
`


const ContactLinkContainer = styled.div`
  margin-top: 5rem;
`

const ContactLink = styled.a`
  margin-right: 1.2rem;
  font-size: 1.2rem;
  color: grey;
  text-decoration:none;
  font-weight: 500;

  &:hover{
    text-decoration: underline;
  }
`

const ContactSection = ({blok}) => {
  return(
    <MainColorSectionContainer>
      <SectionContainer >
        <SectionHeadingContainer>
          <SectionHeading id="contact">
            {blok.heading}
          </SectionHeading>
          <SectionHeadingSvgContainer>
            <ChibiTotoroAlternate />
          </SectionHeadingSvgContainer>
        </SectionHeadingContainer>
        <SubHeading className='fade-in'>
          {blok.question}
        </SubHeading>
        <EmailText className='fade-in'>
        send me an email at <BoldEmail href={`mailto:${blok.email.email}`} target="_blank">{blok.email.email}</BoldEmail>
        </EmailText>
        <ContactLinkContainer className='fade-in'>
          {blok.links.map(link => (
            <ContactLink key={link._uid} href={link.url.url} target="_blank">
              {link.displayText}
            </ContactLink>
          ))}
        </ContactLinkContainer>
      </SectionContainer>
    </MainColorSectionContainer>
  )
} 

export default ContactSection