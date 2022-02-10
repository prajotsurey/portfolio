import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'
import Storyblok from '../lib/storyblok'

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
`

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`

const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
`

const ProjectIntro = styled.div`
  font-size: 1rem;
  font-family: 'Merriweather sans', sans-serif;
  font-weight: 300;
  line-height: 1.5rem;
  margin-bottom: 3rem;
`

const ProjectSection = ({blok}) => {
  const [projects, setProjects] = useState([])
  
  useEffect(async () => {
    const response = await Storyblok.get('cdn/stories/', {
      'starts_with': 'projects/'
    })  
    setProjects(response.data.stories)
  },[])
  

  return(
    <SectionContainer>
      <SectionHeading>
        {blok.heading}
      </SectionHeading>
      <ProjectsContainer>
        {projects.map(project => (
          <ProjectContainer key={project.content._uid}>
            <div>
              <ProjectImage src={project.content.introImage.filename} />
            </div>
            <ProjectTitle>
              {project.content.title}          
            </ProjectTitle>
            <ProjectIntro>
              {project.content.intro}
            </ProjectIntro>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </SectionContainer>
  )
} 

export default ProjectSection