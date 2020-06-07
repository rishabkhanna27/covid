import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            
            <div>
            <Navbar bg="dark" expands="lg">
            <Navbar.Brand className="text-white">CD
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink className="d-inline p-2 bg-dark text-white" to="/covid/">Covid India</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/covid/World">Covid World</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/covid/About">About Covid-19</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/covid/MythBusters">Myth Busters</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/covid/Form">Test Yourself</NavLink>
            </Nav>   
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white text-align-right" to="/covid/View">Admin</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
           
        )
    }
}
export default Navigation;