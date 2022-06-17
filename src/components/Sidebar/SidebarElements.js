import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavList = styled.ul`
    list-style: none;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 50%;
    transition: color .2s ease-in-out;

    &:hover {
        color: rgb(6, 49, 104);
        transition: color .2s ease-in-out;
    }
`