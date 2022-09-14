import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigate, Link } from 'react-router-dom';
import './style.css';
import '../App';
import Logo from '../assets/logos.PNG';

function Navbars() {
    return ( < Navbar collapseOnSelect expand = "lg"
        bg = "dark"
        className = " px-5 navbar"
        variant = "dark" >
        <
        Navbar.Brand href = "#home"
        className = '' >
        <
        img src = { Logo }
        width = { "200" }
        height = { "50 " }
        alt = "Syke World" /
        >
        <
        /Navbar.Brand > <
        Navbar.Toggle ariaControls = "responsive-navbar-nav" / > <
        Navbar.Collapse id = "responsive-navbar-nav" >
        <
        Nav className = "right" >
        <
        Nav.Link > < Navigate to = "/" > Home < /Navigate> < /Nav.Link > <
        Nav.Link Navigate to = "/" > Services < /Nav.Link > <
        Nav.Link Navigate to = "/" > Gallery < /
        Nav.Link >
        <
        NavDropdown title = "Rooms"
        id = "collapsible-nav-dropdown" >
        <
        NavDropdown.Item className = 'bg-dark' > <
        Link to = "room"
        className = 'link' > Single < /Link> < /NavDropdown.Item > <
        NavDropdown.Item className = 'bg-dark' > <
        Link to = "room"
        className = 'link' > Double < /Link> < /NavDropdown.Item > <
        NavDropdown.Item className = 'bg-dark' > <
        Link to = "room"
        className = 'link' > Deluxe < /Link> < /NavDropdown.Item >
        <
        NavDropdown.Item href = "#action/3.4"
        className = 'bg-warning p-2 mt-2' > Check Availability < /NavDropdown.Item> < /
        NavDropdown >
        <
        Nav.Link href = "#services"
        className = 'p-lg-3 bar' > Bar & Restaurant < /Nav.Link > < /
        Nav > < /
        Navbar.Collapse > <
        Nav >
        <
        Nav.Link eventKey = { 2 }
        href = "#memes"
        className = 'px-3 border' >
        LOGIN | SIGN UP <
        /Nav.Link> < /
        Nav >
        <
        /
        Navbar >
    );
}

export default Navbars;