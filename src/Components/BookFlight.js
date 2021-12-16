import React, { useState, useEffect, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import moment from 'moment';
import { BookingContext } from "../Contexts/bookingContext";
import { ActiveMenuContext } from "../Contexts/activeMenuContext";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  message
} from 'antd';

const airports = [
    {
        city: "Bengaluru",
        airport: "Kempegowda International Airport"
    },
    {
        city: "Mumbai",
        airport: "Chhatrapati Shivaji Maharaj International Airport"
    },
    {
        city: "Pune",
        airport: "Pune Airport"
    },
    {
        city: "Delhi",
        airport: "Indira Gandhi International Airport"
    },
    {
        city: "Ahmedabad",
        airport: "Sardar Vallabhbhai Patel International Airport"
    },
    {
        city: "Shimla",
        airport: "	Shimla Airport"
    }];


const airlines = ["Indigo", "Vistara", "AirIndia", "GoAir", "Spicejet"];



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
        let order = Object.assign({}, {from: values.from, to: values.to, date: values.date})
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
            <Form.Item label="Airline">
                <Select>
                    {renderAirlines}
                </Select>
            </Form.Item>
            <Form.Item  name="from" label="From">
                <Select label="From">
                    {renderFrom}
                </Select>
            </Form.Item>
            <Form.Item name="to"  label="To">
                <Select>
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