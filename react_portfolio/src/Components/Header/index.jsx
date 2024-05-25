import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

import { useState } from 'react'
import { useTheme } from '../ThemeToggle'

function Header() {
    const { theme, changeTheme } = useTheme()


    const navbarBg = theme === 'light' ? 'light' : 'dark'
    const navbarVariant = theme === 'light' ? 'light' : 'dark'

    return (
        <>
            <Navbar bg={navbarBg} variant={navbarVariant} expand="lg">

                <Container>
                    <Link to="/" className='text-decoration-none'>
                        <Navbar.Brand>Muhsin Tarik</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="">

                            <NavLink to="/" activeClassName="active-link" className="nav-link">About-Me</NavLink>
                            <NavLink to="/portfolio" activeClassName="active-link" className="nav-link">Portfolio</NavLink>
                            <NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink>
                            <NavLink to="/resume" activeClassName="active-link" className="nav-link">Resume</NavLink>
                        </Nav>
                        {/* Theme Toggle Button inside Navbar */}
                        <Button onClick={changeTheme} variant={theme === 'light' ? 'outline-dark' : 'outline-light'}>
                            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header


