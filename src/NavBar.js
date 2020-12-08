import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './navbar.css'
export default () => (
    <Navbar>
        <Navbar.Brand>Wilhelmiina</Navbar.Brand>
        <Nav className="mr-auto"> 
            <Nav.Item><Link to="/home">Home</Link></Nav.Item>
            <Nav.Item><Link to="/schedule">Schedule</Link></Nav.Item>
            <Nav.Item><Link to="/logout">Logout</Link></Nav.Item>
        </Nav>
    </Navbar>
)