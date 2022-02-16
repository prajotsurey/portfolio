import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import ChuAndChibiTotoro from './ChuAndChibiTotoro'
import Jiji from './Jiji'
import SmallChuAndChibiTotoro from './SmallChuAndChibiTotoro'
import { MainColorSectionContainer, SectionContainer, SectionContentContainer, SectionHeading, SectionHeadingContainer, SectionHeadingSvgContainer } from './styledComponents'

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

  const sectionRef = useRef(null)

  useEffect(() => {
    const totoros = sectionRef.current.querySelectorAll('#totoros path')
    totoros.forEach(totoro => {
      totoro.style.strokeDasharray = totoro.getTotalLength()
      totoro.style.strokeDashoffset = totoro.getTotalLength()
      totoro.style.fillOpacity = '0'
      totoro.style.stroke = 'black'
    })

    const smallTotoros = sectionRef.current.querySelectorAll('#smallTotoros path')
    smallTotoros.forEach(totoro => {
      totoro.style.strokeDasharray = totoro.getTotalLength()
      totoro.style.strokeDashoffset = totoro.getTotalLength()
      totoro.style.fillOpacity = '0'
      totoro.style.stroke = 'black'
    })
    
    
    const options = {
      root:null,
      threshold: 0,
      rootMargin: '0px'
    }

    const strokeKeyframes = [{ strokeDashoffset: '0px' }]
    const strokeTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      duration: 20000,
    }

    const smallStrokeTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      duration: 5000
    }

    const fillKeyframes = [{ fillOpacity: '1' }]
    const fillTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      delay: 4000,
      duration: 1000,
      composite: 'add'
    }

    const smallFillTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      delay: 1000,
      duration: 1000,
      composite: 'add'
    }


    const totorosObserver = new IntersectionObserver(function(entries,observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          console.log('hasodhsoju')
          observer.unobserve(entry.target)
          totoros.forEach(totoro => {
            totoro.animate(
              strokeKeyframes,
              strokeTiming
            )
      
            totoro.animate(
              fillKeyframes,
              fillTiming
            )
          }
          )

          smallTotoros.forEach(totoro => {
            totoro.animate(
              strokeKeyframes,
              smallStrokeTiming
            )
      
            totoro.animate(
              fillKeyframes,
              smallFillTiming
            )
          }
          )

        }
      })
    },options)

    const totorosSVG = sectionRef.current.querySelector('#totoros')
    totorosObserver.observe(totorosSVG)
    const smallTotorosSvg = sectionRef.current.querySelector('#smallTotoros')
    totorosObserver.observe(smallTotorosSvg)
  },[])

  return(
    <MainColorSectionContainer ref={sectionRef}>
      <SectionContainer >
        <SectionHeadingContainer>
          <SectionHeading id="contact">
            {blok.heading}
          </SectionHeading>
          <SectionHeadingSvgContainer>
            <Jiji />
          </SectionHeadingSvgContainer>
        </SectionHeadingContainer>
        <SectionContentContainer>
          <SmallChuAndChibiTotoro />
          <div>
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
          </div>
          <ChuAndChibiTotoro />
        </SectionContentContainer>
      </SectionContainer>
    </MainColorSectionContainer>
  )
} 

export default ContactSection