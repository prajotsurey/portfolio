import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Birds from './Birds'
import DustBunny from './DustBunny'
import SmallBirds from './SmallBirds'
import { AlternateColorSectionContainer, SectionContainer, SectionHeading, SectionHeadingContainer ,SectionHeadingSvgContainer } from './styledComponents'

const SubHeading = styled.h3`
  font-size: 2rem;
`

const SubHeading2 = styled(SubHeading)`
  margin-top: 4rem;
`

const AboutText = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  max-width: 60ch;
  font-weight: 400;
  line-height: 1.5rem;
  font-size: 1.1rem;
`

const AboutText2 = styled(AboutText)`
`

const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;

  @media(min-width:1000px) {
    flex-direction: row;
  }

`


const AboutSection = ({blok}) => {
  
  const sectionRef = useRef(null)

  useEffect(() => {
    const birds = sectionRef.current.querySelectorAll('#birds path')
    birds.forEach(bird => {
      bird.style.strokeDasharray = bird.getTotalLength()
      bird.style.strokeDashoffset = bird.getTotalLength()
      bird.style.fillOpacity = '0'
      bird.style.stroke = 'black'
    })

    const smallBirds = sectionRef.current.querySelectorAll('#smallBirds path')
    smallBirds.forEach(bird => {
      bird.style.strokeDasharray = bird.getTotalLength()
      bird.style.strokeDashoffset = bird.getTotalLength()
      bird.style.fillOpacity = '0'
      bird.style.stroke = 'black'
    })
    
    
    const options = {
      root:null,
      threshold: 0,
      rootMargin: '0px'
    }

    const strokeKeyframes = [{ strokeDashoffset: '0px', strokeDasharray: '0px' }]
    const strokeTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      duration: 3000
    }

    const smallStrokeTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      duration: 2000
    }

    const fillKeyframes = [{ fillOpacity: '1' }]
    const fillTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      delay: 2500,
      duration: 1000,
      composite: 'add'
    }

    const smallFillTiming = {
      fill: 'forwards',
      easing: 'ease-in',
      delay: 1500,
      duration: 500,
      composite: 'add'
    }


    const birdObserver = new IntersectionObserver(function(entries,observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          observer.unobserve(entry.target)
          console.log('here')
          birds.forEach(bird => {
            bird.animate(
              strokeKeyframes,
              strokeTiming
            )
      
            bird.animate(
              fillKeyframes,
              fillTiming
            )
          }
          )

          smallBirds.forEach(bird => {
            bird.animate(
              strokeKeyframes,
              smallStrokeTiming
            )
      
            bird.animate(
              fillKeyframes,
              smallFillTiming
            )
          }
          )

        }
      })
    },options)

    const birdSvg = sectionRef.current.querySelector('#birds')
    birdObserver.observe(birdSvg)
    const smallBirdSvg = sectionRef.current.querySelector('#smallBirds')
    birdObserver.observe(smallBirdSvg)
  },[])

  return(
    <AlternateColorSectionContainer ref={sectionRef}>
      <SectionContainer>
        <SectionHeadingContainer>
          <SectionHeading id="about">
            {blok.heading}
          </SectionHeading>
          <SectionHeadingSvgContainer>
            <DustBunny />
          </SectionHeadingSvgContainer>
        </SectionHeadingContainer>
        <SectionContentContainer>
          <SmallBirds />
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
          <Birds />
        </SectionContentContainer>
      </SectionContainer>
    </AlternateColorSectionContainer>
  )
} 

export default AboutSection