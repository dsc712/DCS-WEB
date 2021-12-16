import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {ActiveMenuContext} from "../Contexts/activeMenuContext";
import {BookingContext} from "../Contexts/bookingContext";

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    message
  } from 'antd';

  
export const Passenger = () => {
    const history = useHistory();

    const {setActiveMenu} = useContext(ActiveMenuContext);
    const {user, users, setActiveUser} = useContext(BookingContext);

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleSubmit = (values) => {
        // get currently authorized user
        let auth = users.filter((val) => {
           if(val.passengerID === values.id) return true
        })

        // set auth
        if(auth.length !== 0) {
            setActiveUser(auth[0])
            setActiveMenu("2");
            history.push("/BookFlight");
        } else { // redirect if user with ID not found
            setActiveMenu("4");
            message.error("Passenger ID doesn't exist");
        }
    }

    const buttonItemLayout = {
        wrapperCol: { span: 8, offset: 2 },
    }
    
    const formItemLayout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 8 },
      }

    return (
        <>
        <h1>Passenger Details</h1>
        <Form
            {...formItemLayout}
            layout="horizontal"
            initialValues={{
            size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            onFinish={handleSubmit}
            size={componentSize}
        >
            <Form.Item name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="id" label="Passenger ID">
                <Input placeholder="Enter passenger ID" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit" onClick={(e) => {setActiveMenu("3")}} block>Submit</Button>
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                <Link to="/Register">
                    <Button onClick={() => {}} block>Register</Button>
                </Link>
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                <Link to="/BookFlight">
                    <Button onClick={() => {setActiveMenu("2")}} block>Book Tickets</Button>
                </Link>
            </Form.Item>
        </Form>
        </>
    )
}