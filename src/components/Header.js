import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container, Nav } from 'react-bootstrap';

const Header = () =>(
    <header>
        <Jumbotron fluid>
            <Container>
                <img src="img/logo-header.jpg" />
            </Container>
        </Jumbotron>       
    </header>
)


export default Header;