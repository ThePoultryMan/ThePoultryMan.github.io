import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { NavList, NavLink } from './SidebarElements'
import './Sidebar.css'

class Sidebar extends React.Component {
    showSettings(event) {
        event.preventDefault(); 
    }

    render() {
        return (
            <Menu right>
                <NavList>
                    <li><NavLink to='./'>Home</NavLink></li>
                    <li><NavLink to='./projects'>Projects</NavLink></li>
                    <li><NavLink to='./mods'>Mods</NavLink></li>
                </NavList>
            </Menu>
        );
    }
}

export default Sidebar;