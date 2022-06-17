import styled from 'styled-components'
import { NavLink as NLink, Link } from 'react-router-dom'

export const Nav = styled.nav`
    background-color: rgb(27, 28, 28);
    height: 80px;
    display: flex;
    padding: 0.5rem calc((100vm - 1000px) / 2);
    z-index: 100;
`

export const HomeShortcut = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
`

export const NavLink = styled(NLink)`
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

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media ( max-width: 768px ) {
        display: none;
    }
`