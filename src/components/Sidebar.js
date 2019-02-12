import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, Badge } from 'react-bootstrap';

const Sidebar = () =>(
    <aside id="sidebar">
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <NavLink to="/favorites">Favorites <Badge pill variant="warning">5</Badge></NavLink>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <NavLink to="/cart">Shopping Cart <Badge pill variant="warning">2</Badge></NavLink>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <NavLink to="/about">About</NavLink>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <a href="/">Soruce Code</a>
            </ListGroup.Item>            
        </ListGroup>
    </aside>
)


export default Sidebar;