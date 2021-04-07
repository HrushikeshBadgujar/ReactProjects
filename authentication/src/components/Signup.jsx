import React, { Component } from 'react';

import {Row, Col, Form, FormControl, FormGroup, FormLabel, FormCheck, Button } from 'react-bootstrap';

class Signup extends Component {
    render() {
        return (
            <Form>
                <h3>Register</h3>

                <FormGroup controlId="formBasicFirstName">
                    <FormLabel>First Name</FormLabel>
                    <FormControl type ="text" placeholder="Enter First Name"></FormControl>
                </FormGroup>

                <FormGroup controlId="formBasicLastName">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type ="text" placeholder="Enter Last Name"></FormControl>
                </FormGroup>
                            
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email</FormLabel>
                    <FormControl type ="email" placeholder="Enter email"></FormControl>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type ="password" placeholder="Enter password"></FormControl>
                </FormGroup>

                <Button variant="primary" type="submit" block>Register</Button>

                <Row>    
                    <Col className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </Col>
                </Row>              
            </Form>
        );
    }
}

export default Signup;