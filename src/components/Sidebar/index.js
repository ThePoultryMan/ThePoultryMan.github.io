import React from "react";
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import './Sidebar.css'

class Sidebar extends React.Component {
    showSettings(event) {
        event.preventDefault(); 
    }

    render() {
        return (
            <Menu right>
                <NavLink to='./'>Home</NavLink>
                <NavLink to='./projects'>Projects</NavLink>
                <NavLink to='./mods'>Mods</NavLink>
            </Menu>
        );
    }
}

export default Sidebar;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: auto;
    transition: color .2s ease-in-out;

    &:hover {
        color: rgb(6, 49, 104);
        transition: color .2s ease-in-out;
    }
`