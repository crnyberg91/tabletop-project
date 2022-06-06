import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainTabs from './MainTabs/mainTabs';
import SelectedTabDisplay from './selectedTabDisplay/selectedTabDisplay';
import StatsBox from './statsBox/statsBox';
import './mainContentBox.css';

class MainContentBox extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <Container>
                <Row>
                    <Col sm>
                        <MainTabs />
                    </Col>
                    <Col sm>
                        <SelectedTabDisplay />
                    </Col>
                    <Col sm>
                        <StatsBox/>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default MainContentBox;