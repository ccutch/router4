import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/feather.png'


const Logo = styled.img`
  height: 30px;
`

const Nav = styled.nav`
  margin-left: auto;
`

const StyledLink = styled(Link)`
  margin-left: 20px;
  cursor: pointer;
  color: ${({ active }) => active ? 'rebeccapurple' : 'darkslategray'};
  text-decoration: ${({ active }) => active ? 'underlined' : 'none'};

  &:hover {
    color: rebeccapurple;
  }
`

const NavLink = ({ to, ...props }) => (
  <Route exact path={to} children={({ match }) => (
    <StyledLink to={to} active={match} {...props} />
  )} />
)


const Header = props => (
  <header {...props}>
    <Logo src={logo} />

    <Nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/runkit'>Runkit Demos</NavLink>
    </Nav>
  </header>
)

export default styled(Header)`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
`
