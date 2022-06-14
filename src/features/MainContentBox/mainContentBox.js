import React from 'react';
import { Container } from 'react-bootstrap';
import ClassPage from '../ClassPage/classPage';
import SelectedClassPage from '../SelectedClassPage/selectedClassPage';
import FinalClassPage from '../FinalClassPage/finalClassPage';
import './mainContentBox.css';

class MainContentBox extends React.Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        // console.log(this.props);
        return (
            <Container>
                {this.page === 1 && <ClassPage onSubmit={this.nextPage} />}
                {this.page === 2 && <SelectedClassPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
                {this.page === 3 && <FinalClassPage previousPage={this.previousPage} />}
            </Container>
        );
    }
}

export default MainContentBox;