import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionHeading } from './styledComponents'

const ProjectSection = ({blok}) => {
  return(
    <SectionContainer>
      <SectionHeading>
        {blok.heading}
      </SectionHeading>
    </SectionContainer>
  )
} 

export default ProjectSection