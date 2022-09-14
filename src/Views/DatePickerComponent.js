import React from 'react'
import { Form } from 'react-bootstrap';
import './style.css';

class BootstrapDatePickerComponent extends React.Component {

    render() {

        return ( <
            div >
            <
            div className = "row border-dark" >

            <
            Form.Group className = 'form'
            controlId = "dob" > <
            Form.Control type = "date"
            name = "dob"
            placeholder = "Pick a date" / >
            <
            /Form.Group>  < /
            div > <
            /div>
        )
    }

}

export default BootstrapDatePickerComponent;