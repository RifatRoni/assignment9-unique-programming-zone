import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3">
        <Container>
        <Navbar.Brand to="/home"><img
                    alt=""
                    src={logo}
                    width="30"
                    height="35"
                    className="d-inline-block align-top me-3 mt-1 img-fluid"
                    />
                <span style={{fontSize:"1rem"}}><NavLink to="/home" className="link-style">Unique Programming Zone</NavLink></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "#0284FC"}} className="menu-link">Home </NavLink>
                <NavLink to="/about" activeStyle={{ fontWeight: "bold", color: "#0284FC"}} className="menu-link">About </NavLink>
                <NavLink to="/services" activeStyle={{ fontWeight: "bold", color: "#0284FC"}} className="menu-link">Services </NavLink>
                <NavLink to="/contact" activeStyle={{ fontWeight: "bold", color: "#0284FC"}} className="menu-link">Contact </NavLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>           
    );
};

export default Header;