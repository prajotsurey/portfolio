import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'
import { AlternateColorSectionContainer } from './styledComponents'

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
  font-weight: 600;
  color: black;
`


const ContactLinkContainer = styled.div`
  margin-top: 2rem;
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
    <AlternateColorSectionContainer>
      <SectionContainer>
        <SectionHeading>
          {blok.heading}
        </SectionHeading>
        <SubHeading>
          {blok.question}
        </SubHeading>
        <EmailText>
        send me an email at <BoldEmail href={`mailto:${blok.email.email}`} target="_blank">{blok.email.email}</BoldEmail>
        </EmailText>
        <ContactLinkContainer>
          {blok.links.map(link => (
            <ContactLink key={link._uid} href={link.url} target="_blank">
              {link.displayText}
            </ContactLink>
          ))}
        </ContactLinkContainer>
      </SectionContainer>
    </AlternateColorSectionContainer>
  )
} 

export default ContactSection