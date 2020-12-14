import React, {useEffect, useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { api } from '.'
import './navbar.css'
export default () => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        api.get("admin").then(res => {
            if(!res.data.Success) {
                console.error(res.data.Message)
            } else {
                setAdmin(res.data.Data)
            }
        }).catch(err => console.error)
    })
    return (
    <Navbar>
        <Navbar.Brand>Wilhelmiina</Navbar.Brand>
        <Nav className="mr-auto"> 
            <Nav.Item><Link to="/home">Home</Link></Nav.Item>
            <Nav.Item><Link to="/schedule">Schedule</Link></Nav.Item>
            <Nav.Item><Link to="/schedule">Courses</Link></Nav.Item>
            <Nav.Item><Link to="/schedule">Subjects</Link></Nav.Item>
            {admin && 
                <Nav.Item> <Link to="/admin">Control Panel</Link> </Nav.Item>
            }
            <Nav.Item><Link to="/logout">Logout</Link></Nav.Item>
        </Nav>
    </Navbar>
    )
}