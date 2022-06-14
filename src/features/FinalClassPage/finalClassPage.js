import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './finalClassPage.css';

class FinalClassPage extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <Form>
                <Col>
                    <label className="label">placeholder</label>
                    <Form.Control required/>
                </Col>
                <Col>
                    <label className="label">placeholder</label>
                    <Form.Control required/>
                </Col>
                <Button>submit</Button>
            </Form>
        );
    }
}

export default FinalClassPage;