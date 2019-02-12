import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container, Nav } from 'react-bootstrap';

const Header = () =>(
    <header>
        <Jumbotron fluid>
            <Container>
                <h1>Beer Shop</h1>
                <p>Duff Brewery since 1961.</p>
            </Container>
        </Jumbotron>       
    </header>
)


export default Header;