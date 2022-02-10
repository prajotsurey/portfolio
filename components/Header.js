import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 70px;
  width: 90%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items:center;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(min-width:600px) {
    justify-content: flex-end;
  }

`

const NavLink = styled.a`
  display: block;
  margin-left: 0px;
  font-size: 1.4rem;
  font-weight: 300;

  @media(min-width:600px) {
    margin-left: 3rem;
  }
`


const Header = () => {
  return(
    <HeaderContainer>
      <Nav>
        <NavLink>Projects</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header