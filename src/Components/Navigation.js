import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            
            <div>
            <Navbar bg="dark" expands="lg">
            <Navbar.Brand className="text-white">CT
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">About</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/India">Covid India</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/World">Covid World</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/MythBusters">Myth Busters</NavLink>
            </Nav>   
            </Navbar.Collapse>
            </Navbar>
            </div>
           
        )
    }
}
export default Navigation;