import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <h1>Carbon Toast</h1>
            </NavLink>
            <NavMenu>
                <NavLink to='./projects' activeStyle>
                    Projects
                </NavLink>
                <NavLink to='./mods' activeStyle>
                    Mods
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar