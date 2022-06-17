import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseStatTwo } from '../../rootSlice';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './finalClassPage.css';


export const FinalClassPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const statTwo = useSelector(state => state.statTwo);
    const { register, handleSubmit } = useForm({ defaultValues: { statTwo } });

    const onSubmit = (data) => {
        dispatch(chooseStatTwo(data.statTwo))
        navigate.push('./result')
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <label htmlFor='statTwo' className='label'>stat Two</label>
                    <select id='statTwo' name='statTwo' ref={register}>
                        <option value='statTwo1'>statTwo Two</option>
                        <option value='statTwo2'>statTwo two</option>
                        <option value='statTwo3'>statTwo three</option>
                    </select>
                </Col>
            </Row>
            <Button>submit</Button>
        </Form>
    )
}




// class FinalClassPage extends React.Component {
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
//                 <Button>submit</Button>
//             </Form>
//         );
//     }
// }

// export default FinalClassPage;