import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
//const { Navbar, Nav } = require("react-bootstrap")


const TopMenu = () => {
    return(
        <div>
            <Navbar className="latar"  >

                <Link to="/">
                    <Navbar.Brand className="student" > Student App </Navbar.Brand>
                </Link>

                <Nav className="mr-auto"  >
                    <Nav.Link as = {Link} to="/">Home</Nav.Link>
                    <Nav.Link as= {Link} to="/About">About</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}

export default TopMenu;