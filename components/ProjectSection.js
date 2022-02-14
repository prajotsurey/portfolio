import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'
import Storyblok from '../lib/storyblok'
import { AlternateColorSectionContainer } from './styledComponents'

const ProjectsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 1);
  grid-gap: 2rem;

  @media(min-width:700px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  margin-bottom: 8rem;

`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  max-width: 500px;
  justify-self: center;
  margin-bottom: 4rem;
`
const ProjectLink = styled.a`
  display:block;
  width:100%;
  overflow: hidden;
  position: relative;

`


const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 100ms ease-in;

  ${ProjectLink}:hover &{
    transform: scale(1.02);
  }
`

const ProjectTitle = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
`

const ProjectIntro = styled.div`
  font-size: 1.1rem;
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  color:black;
`

const LinksSection = styled.div`
  display:flex;
  flex-direction: column;
`

const Link = styled.a`
  display:flex;
  flex-direction: row;
  align-items:center;
  text-decoration: none;
  color: grey;
  font-size: 1.1rem;
  line-height: 1.5rem;
  stroke: grey;

  &:hover{
    text-decoration: underline;
  }

  & svg{
    margin-left: 0.5rem;
  }

`

const ProjectSection = ({blok}) => {
  const [projects, setProjects] = useState([])
  const sectionRef = useRef(null)
  useEffect(async () => {
    const response = await Storyblok.get('cdn/stories/', {
      'starts_with': 'projects/'
    })  
    setProjects(response.data.stories)

    const options = {
      root:null,
      threshold: 0,
      rootMargin: '0px'
    }

    const projects = sectionRef.current.querySelectorAll('.fade-in')
    const projectObserver = new IntersectionObserver(function(entries,observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('appear')
          observer.unobserve(entry.target)
        }
      })
    },options)


    projects.forEach(project => {
      projectObserver.observe(project)
    })
  },[])
  
  console.log(projects)

  return(
    <AlternateColorSectionContainer ref={sectionRef}>
      <SectionContainer>
        <SectionHeading id="projects">
          {blok.heading}
        </SectionHeading>
        <ProjectsContainer>
          {projects.map(project => (
            <ProjectContainer className='fade-in' key={project.content._uid}>
              <ProjectLink href={project.content.websiteLink.url} target='_blank'>
                <ProjectImage src={project.content.introImage.filename} />
              </ProjectLink>
              <ProjectTitle>
                {project.content.title}          
              </ProjectTitle>
              <ProjectIntro>
                {project.content.intro}
              </ProjectIntro>
              <LinksSection>
                {project.content.links.map(link => (
                  <Link key={link._uid} href={link.url.url} target="_blank" rel="noreferrer">
                    {link.displayText}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.231 10.4026C14.6452 8.98837 17.8258 6.51203 14.6569 3.34316C11.488 0.174286 9.01165 3.35478 7.59743 4.769" strokeWidth="2"/>
                      <path d="M4.769 7.59743C3.35479 9.01165 0.174255 11.488 3.34314 14.6569C6.51203 17.8257 8.98836 14.6452 10.4026 13.231" strokeWidth="2"/>
                      <path d="M11.8284 6.17159L6.17158 11.8284" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                ))}
              </LinksSection>
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </SectionContainer>
    </AlternateColorSectionContainer>
  )
} 

export default ProjectSection