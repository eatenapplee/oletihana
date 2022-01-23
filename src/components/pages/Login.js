import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {
    render() {
        return (
            <div className="loginContainer">
                <div className="loginTitle">
                    <h2>Tervetuloa ylläpitäjäsivustolle</h2>
                </div>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Käyttäjätunnus</Form.Label>
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Salasana</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Muista minut" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Kirjaudu sisään
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
