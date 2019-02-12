import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () =>(
    <header>
        <h1>My React App</h1>
        <hr/>
        <NavLink to="/" activeClassName="active" exact={true}>HomePage</NavLink> | 
        <NavLink to="/add" activeClassName="active">Add</NavLink> | 
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <hr/>
    </header>
)


export default Header;