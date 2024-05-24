import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">Muhsin Tarik's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <NavLink to="/about" activeClassName="active-link" className="nav-link">
                                About-Me
                            </NavLink>
                            <NavLink to="/portfolio" activeClassName="active-link" className="nav-link">
                                Portfolio
                            </NavLink>
                            <NavLink to="/contact" activeClassName="active-link" className="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="/resume" activeClassName="active-link" className="nav-link">
                                Resume
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;