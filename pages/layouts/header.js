import Head from 'next/head'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand><Link href="/">Medium</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="pr-4">Home</Nav.Link>
                        <Nav.Link href="#memes" className="pr-4">Login</Nav.Link>
                        <Button variant="success" className="px-4">Join</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)

export default Header