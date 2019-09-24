import React, { Component } from 'react'
import './NavBar2.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col} from 'react-bootstrap'
import logo from '../../img/tsubaki.svg'

const Cont = {
    background: 'red'
}

class NavBar2 extends Component {

    render(){
        return (
            <Container styles="{Cont}">
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <div className="navbar-brand" >
                        <img src= { logo } className="Logo"></img>
                        Aqui temos um navbar-brnad
                        <div className="Titulo">
                            Escrito
                            <div > Escrevendo código de NavBar </div>
                        </div>

                    </div>
                </Navbar>

            </Container>)

    }

}


export default NavBar2
