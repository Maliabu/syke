import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import '../App';
import Logo from '../assets/logos.PNG';

function Navbars() {
    return ( < Navbar collapseOnSelect expand = "lg"
        bg = "dark"
        className = " px-5 navbar shadow"
        variant = "dark" >
        <
        Navbar.Brand href = "/"
        className = '' >
        <
        img src = { Logo }
        width = { "200" }
        height = { "40 " }
        alt = "Syke World" /
        >
        <
        /Navbar.Brand > <
        Navbar.Toggle ariaControls = "responsive-navbar-nav" / > <
        Navbar.Collapse id = "responsive-navbar-nav" >
        <
        Nav className = "right" >
        <
        Nav.Link href = "room"
        className = 'link' > Rooms < /Nav.Link >  <
        Nav.Link href = "services"
        className = 'bar pt-3' > Bar & Restaurant < /Nav.Link >  <
        Nav.Link className = 'link'
        href = "about px-2" > About Syke World < /Nav.Link>  < /Nav > < /Navbar.Collapse > <
        Nav.Link href = "room"
        className = 'link rounded-circle border p-2 large' >
        Sy.. < /Nav.Link > < /
        Navbar >
    );
}

export default Navbars;