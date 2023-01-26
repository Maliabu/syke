import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Room from './Single';
import Double from './Double';
import Deluxe from './Deluxe';
import Navbars from './Navbar';

function Rooms() {
    return ( < div >
        <
        Navbars / >
        <
        div className = 'row bg-warning p-5' >
        <
        h1 className = 'display-4' > Rooms < /h1>  <
        p className = 'bg-warn border-0 shadow px-5 py-2' >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "16"
        height = "16"
        fill = "currentColor"
        class = "bi bi-pencil-square"
        viewBox = "0 0 16 16" >
        <
        path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" / >
        <
        path d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" / >
        <
        /svg>  BOOK A ROOM < /p >
        <
        Tabs defaultActiveKey = "home"
        id = "uncontrolled-tab-example right"
        className = "bg-light border-0" >
        <
        Tab eventKey = "home"
        title = "SINGLE" >
        <
        Room / >
        <
        /Tab> <
        Tab eventKey = "profile"
        title = "DOUBLE" >
        <
        Double / >
        <
        /Tab> <
        Tab eventKey = "contact"
        title = "DELUXE" >
        <
        Deluxe / >
        <
        div className = 'row p-5' > < /div > < /
        Tab > < /
        Tabs >
        <
        /div> < /
        div >
    );
}

export default Rooms;