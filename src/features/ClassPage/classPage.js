import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './classPage.css';

class ClassPage extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <Form>
                <Row>
                    <Col>
                        <label className="label">name</label>
                        <Form.Control type="text" required/>
                    </Col>
                    <Col>
                        <label className="label">class</label>
                        <Form.Control type="text" required/>
                    </Col>
                </Row>
                <Col>
                    <label className="label">placeholder</label>
                    <Form.Control required/>
                </Col>
                <Col>
                    <label className="label">placeholder</label>
                    <Form.Control required/>
                </Col>
                <Col>
                    <label className="label">placeholder</label>
                    <Form.Control required/>
                </Col>
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
 
export default ClassPage;