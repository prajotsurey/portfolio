import React from 'react'
import styled from 'styled-components'
import { AlternateColorSectionContainer } from './styledComponents'

const FooterContainer = styled.footer`
  width: 80%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  box-sizing:border-box;
  padding:1rem 0 1rem 0;
  color:grey;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4rem;
  font-size:0.8rem;
`

const FooterName = styled.div`
  font-size: 1.5rem;
  color:#ffffff;
  font-weight: 600;
  margin: 1rem 0;
`

const NormalSpan = styled.span`
  font-weight: 300;
  font-size: 1.3rem;
`

const FooterText = styled.div`
  margin-top: 1rem;
`

const Footer = ({blok}) => {
  return(
    <AlternateColorSectionContainer>
      <FooterContainer>
        <FooterContent>
          <FooterName>
          Prajot Surey <NormalSpan>Portfolio</NormalSpan>
          </FooterName>
          <FooterText>
            {blok.footerText}<br />
            {blok.footerText2}
          </FooterText>
        </FooterContent>
      </FooterContainer>
    </AlternateColorSectionContainer>

  )
}

export default Footer