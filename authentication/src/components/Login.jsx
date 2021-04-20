import React, { Component } from 'react';

import {Row, Col, Form, FormControl, FormGroup, FormLabel, FormCheck, Button } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <Form>
                {/* <h3>Log in</h3> */}

                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email</FormLabel>
                    <FormControl type ="email" placeholder="Enter email"></FormControl>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type ="password" placeholder="Enter password"></FormControl>
                </FormGroup>

                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Remember me" />
                </FormGroup>

                <Button variant="primary" type="submit" block>Submit</Button>

                <Row>
                    <Col className="new-user">
                        New User?<a href="#">Create account</a>
                    </Col>    
                    <Col className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </Col>
                </Row>              

            </Form>
        );
    }
}

export default Login;