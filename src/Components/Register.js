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

  
export const Register = () => {
    const history = useHistory();

    const {setActiveMenu} = useContext(ActiveMenuContext);
    const {setActiveUser, users, addNewUser, user} = useContext(BookingContext);

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleSubmit = (values) => {
        let newId =  "2020sp9304" +  users.length 

        let newUser = {
            passengerID: newId,
            name: values.name,
            aadhar: values.aadhar,
            telephone: values.telephone,
            bookings: []
        }

        addNewUser(newUser);
        let len = users.length;
        setActiveUser(users[len-1])
        message.success("Registered Successfully!!", newId);
        setActiveMenu("4")
        history.push("/Passenger");
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
        <h1>Input Passenger Details</h1>
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
            <Form.Item name="name" label="Name">
                <Input placeholder="Enter passenger name" />
            </Form.Item>
            <Form.Item name="aadhar" label="AADHAR">
                <Input placeholder="Enter aadhar number" />
            </Form.Item>
            <Form.Item name="telephone" label="Telephone">
                <Input placeholder="Enter telephone number" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit" block>Submit</Button>
            </Form.Item>
        </Form>
        </>
    )
}