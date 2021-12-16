import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
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

    const {isBooked} = useContext(BookingContext);
    const {setActiveMenu} = useContext(ActiveMenuContext);

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const [from, setFrom] = useState(airports[0]);
    const [to, setTo] = useState(airports[3]);

    const onSelectFrom = (val) => {
        const data = val.split(',');
        setFrom({ airport: data[0], city: data[1]});
    }

    const onSelectTo = (val) => {
        const data = val.split(',');
        setTo({ airport: data[0], city: data[1]});
    }


    const renderFrom = airports.map((val, key) => <Select.Option key={key} value={`${val.airport}, ${val.city}`}>{val.airport}, {val.city}</Select.Option>);
    const renderTo = airports.map((val, key) => <Select.Option key={key} value={`${val.airport}, ${val.city}`}>{val.airport}, {val.city}</Select.Option>);
    const renderAirlines = airlines.map((val, key) => <Select.Option key={key} value={val}>{val}</Select.Option>);

    
    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    function handleBooking() {
        message.success('Your flight booked successfully');
    }

    // if(props.isBooked) {
    if (isBooked) {
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
        >
            <Form.Item name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Airline">
                <Select value={airlines[0]}>
                    {renderAirlines}
                </Select>
            </Form.Item>
            <Form.Item  label="From">
                <Select value={`${from.airport}, ${from.city}`} onChange={onSelectFrom} label="From">
                    {renderFrom}
                </Select>
            </Form.Item>
            <Form.Item value={`${to.airport}, ${to.city}`} onChange={onSelectTo} label="To">
            <Select>
                {renderTo}
            </Select>
            </Form.Item>
            <Form.Item label="Select Date">
                <DatePicker disabledDate={disabledDate}/>
            </Form.Item>
            <Form.Item>
                    <Button onClick={handleBooking}>Confirm Booking</Button>
            </Form.Item>
        </Form>
        </>
    );
};  