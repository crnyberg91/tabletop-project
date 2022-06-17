import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { chooseName } from '../../rootSlice';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './classPage.css';


export const ClassPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(state => state.name);
    const { register, handleSubmit } = useForm({ defaultValues: { name }});

    const onSubmit = (data) => {
        dispatch(chooseName(data.name))
        navigate.push('./selectedClass')
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <label htmlFor='name' className="label">name</label>
                    <select id='name' name='name' ref={register}>
                        <option value='name1'>name one</option>
                        <option value='name2'>name two</option>
                        <option value='name3'>name three</option>
                    </select>
                </Col>
            </Row>
            <Button>Next</Button>
        </Form>
    )
}

// class ClassPage extends React.Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <Form>
//                 <Row>
//                     <Col>
//                         <label className="label">name</label>
//                         <Form.Control type="text" required/>
//                     </Col>
//                     <Col>
//                         <label className="label">class</label>
//                         <Form.Control type="text" required/>
//                     </Col>
//                 </Row>
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
 
// export default ClassPage;