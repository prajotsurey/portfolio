import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 80%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 700px;
  padding-bottom:10rem;
  box-sizing:border-box;
`


export const SectionHeading = styled.h2`
  font-weight: 100;
  font-size: 2.5rem;
  margin-top: 5rem;
  margin-bottom: 4rem;

  @media(min-width:1000px) {
    margin-bottom: 8rem;
  }
`

export const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SectionHeadingSvgContainer = styled.div`
  margin-top: 5rem;
  height: 2rem;
  margin-left: 1rem;
`

export const MainColorSectionContainer = styled.div`
  background: #ffffff;
  color:black;
`

export const AlternateColorSectionContainer = styled.div`
  background: #1B1B1B;
  color:white;
`

export const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;

  @media(min-width:1000px) {
    flex-direction: row;
  }

`