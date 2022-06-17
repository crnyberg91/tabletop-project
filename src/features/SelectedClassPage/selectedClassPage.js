import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { chooseStatOne } from '../../rootSlice';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './selectedClassPage.css';


export const SelectedClassPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const statOne = useSelector(state => state.statOne);
    const { register, handleSubmit } = useForm({ defaultValues: { statOne }});

    const onSubmit = (data) => {
        dispatch(chooseStatOne(data.statOne))
        navigate.push('./finalClass')
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <label htmlFor='statOne' className='label'>stat one</label>
                    <select id='statOne' name='statOne' ref={register}>
                        <option value='statOne1'>statOne one</option>
                        <option value='statOne2'>statOne two</option>
                        <option value='statOne3'>statOne three</option>
                    </select>
                </Col>
            </Row>
            <Button>Next</Button>
        </Form>
    )
}

















// class SelectedClassPage extends React.Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <Form>
//                 <Col>
//                     <label className="label">placeholder</label>
//                     <Form.Control required/>
//                 </Col>
//                 <Col>
//                     <label className="label">placeholder</label>
//                     <Form.Control required/>
//                 </Col>
//                 <Col>
//                     <label className="label">placeholder</label>
//                     <Form.Control required/>
//                 </Col>
//                 <Col>
//                     <label className="label">placeholder</label>
//                     <Form.Control required/>
//                 </Col>
//                 <Col>
//                     <label className="label">placeholder</label>
//                     <Form.Control required/>
//                 </Col>
//                 <Button>submit</Button>
//             </Form>
//         );
//     }
// }

// export default SelectedClassPage;