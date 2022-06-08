import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CharForm from '../CharForm/charForm';
import './mainContentBox.css';

class MainContentBox extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <Container>
                <CharForm />
            </Container>
        );
    }
}

export default MainContentBox;