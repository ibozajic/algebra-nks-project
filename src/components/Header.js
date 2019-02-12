import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container, Nav } from 'react-bootstrap';

const Header = () =>(
    <header>
        <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
        </Jumbotron>   
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">
                    <NavLink to="/" activeClassName="active" exact={true}>HomePage</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">
                <NavLink to="/add" activeClassName="active">Add</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </Nav.Link>
            </Nav.Item>
        </Nav>     
    </header>
)


export default Header;