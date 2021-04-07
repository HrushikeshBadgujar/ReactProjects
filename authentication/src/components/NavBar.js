import React, { Component } from 'react';

import {Nav, Navbar, NavLink, NavItem} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            
            <Navbar>
    
                <Navbar.Brand href="/login">Brand</Navbar.Brand>
                
                <Navbar.Toggle />
                
                <Navbar.Collapse className="justify-content-end">
                
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/signup">Register</NavLink>
                    </NavItem>
                </Nav>
                
                </Navbar.Collapse>
    
            </Navbar>
            
        );
    }
}

export default NavBar;