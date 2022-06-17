import React from 'react'
import { Nav, HomeShortcut, NavLink, NavMenu } from './NavbarElements'
import Sidebar from '../Sidebar'

const Navbar = () => {
  return (
    <>
        <Nav>
            <HomeShortcut to='./'>
                <h1>Carbon Toast</h1>
            </HomeShortcut>
            <NavMenu>
                <NavLink to='./'>Home</NavLink>
                <NavLink to='./projects'>Projects</NavLink>
                <NavLink to='./mods'>Mods</NavLink>
            </NavMenu>
        </Nav>
        <Sidebar />
    </>
  )
}

export default Navbar