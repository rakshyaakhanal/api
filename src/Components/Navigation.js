import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            {/* <Navbar.collapse id='basic-navbar-nav'></Navbar.collapse> */}

            <Nav>
                <NavLink className='d-inline p-2 bg-dark text-white' to='/'> Home </NavLink>
                <NavLink className='d-inline p-2 bg-dark text-white' to='/Department'> Department </NavLink>
                <NavLink className='d-inline p-2 bg-dark text-white' to='/Employee'> Employee </NavLink>
                <NavLink className='d-inline p-2 bg-dark text-white' to='/Api'> Api </NavLink>
            </Nav>
        </Navbar>
    )

}

export default Navigation;
