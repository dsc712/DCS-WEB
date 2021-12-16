import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import moment from 'moment';
import { BookingContext } from "../Contexts/bookingContext";
import { ActiveMenuContext } from "../Contexts/activeMenuContext";
import {airlines, airports} from "../db";

import {
  Form,
  Button,
  Radio,
  Select,
  DatePicker,
  message
} from 'antd';

export const BookFlight = () => {

    const history = useHistory();

    const {user, bookTicket} = useContext(BookingContext);
    const {setActiveMenu} = useContext(ActiveMenuContext);

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const renderFrom = airports.map((val, key) => <Select.Option key={key} value={`${val.airport}, ${val.city}`}>{val.airport}, {val.city}</Select.Option>);
    const renderTo = airports.map((val, key) => <Select.Option key={key} value={`${val.airport}, ${val.city}`}>{val.airport}, {val.city}</Select.Option>);
    const renderAirlines = airlines.map((val, key) => <Select.Option key={key} value={val}>{val}</Select.Option>);

    
    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }

    function handleSubmit(values) {
        let order = Object.assign({}, {airline: values.airline, from: values.from, to: values.to, date: values.date})
        bookTicket(order);
        message.success('Your flight booked successfully');
        history.push("/Details");
    }

    if (user.bookings.length !== 0) {
        return <>
                <h1>Book Flight</h1>
                <p>Seems like you already have a booking...</p>   
                <Link to="/Details">
                    <Button onClick={() => {setActiveMenu("3")}}>Your bookings</Button>
                </Link>
        </>
    }

    return (
        <>
        <h1>Book Flight</h1>
        <Form
            labelCol={{
                span: 2,
            }}
            wrapperCol={{
            span: 14,
            }}
            layout="horizontal"
            initialValues={{
            size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            onFinish={handleSubmit}
        >
            <Form.Item name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="airline" label="Airline">
                <Select placeholder={"Select an airline"}>
                    {renderAirlines}
                </Select>
            </Form.Item>
            <Form.Item   name="from" label="From">
                <Select placeholder={"Select source airport"}  label="From">
                    {renderFrom}
                </Select>
            </Form.Item>
            <Form.Item  name="to"  label="To">
                <Select placeholder={"Select destination airport"}>
                    {renderTo}
                </Select>
            </Form.Item>
            <Form.Item name="date" label="Select Date">
                <DatePicker disabledDate={disabledDate}/>
            </Form.Item>
            <Form.Item>
                    <Button htmlType="submit" >Confirm Booking</Button>
            </Form.Item>
        </Form>
        </>
    );
};  