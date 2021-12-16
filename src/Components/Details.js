import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

import { BookingContext } from "../Contexts/bookingContext";
import { ActiveMenuContext } from "../Contexts/activeMenuContext";

import {Button, Descriptions, message} from 'antd';



export const Details = () => {
    const { user } = useContext(BookingContext);
    const { setActiveMenu } = useContext(ActiveMenuContext);

    function handleClick() {
        message.success("Boarding Pass sent on registered email")
    }

    if(user?.bookings?.length === 0) {
        return <>
        <h1>Booking Details</h1>
        <h4>You don't have any booking yet...</h4>
        <Link to="/BookFlight">
            <Button onClick={() => {setActiveMenu("2")}}>Book Now</Button> 
        </Link>
        </>
    }
    
    return (
        <>
         <Descriptions title="Booking Details">
            <Descriptions.Item label="Passenger ID">{user.passengerID}</Descriptions.Item>
            <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{user.telephone}</Descriptions.Item>
            <Descriptions.Item label="From">{user.bookings[0].from}</Descriptions.Item>
            <Descriptions.Item label="To">{user.bookings[0].to}</Descriptions.Item>
            <Descriptions.Item label="Date">{ moment(user.bookings[0].date).format('MM/DD/YYYY') }</Descriptions.Item>
         </Descriptions>
       
         <Button onClick={handleClick}>Get Boarding Pass</Button>
        </>
    )
}