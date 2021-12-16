import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import { BookingContext } from "../Contexts/bookingContext";
import {Button, Descriptions, message} from 'antd';



export const Details = (props) => {
    const {isBooked, bookingToggle} = useContext(BookingContext);

    function handleClick() {
        message.success("Boarding Pass sent on registered email")
    }

    if(!isBooked) {
        return <>
        <h4>You don't have any booking yet...</h4>
        <Link to="/BookFlight">
            <Button>Book Now</Button> 
        </Link>
        </>
    }
    return (
        <>
         <Descriptions title="Booking Info">
            <Descriptions.Item label="UserName">Devyendu Shekhar</Descriptions.Item>
            <Descriptions.Item label="Telephone">+91 8076851xxx</Descriptions.Item>
            <Descriptions.Item label="From">Kempegowda International Airport, Bengaluru</Descriptions.Item>
            <Descriptions.Item label="To">Indira Gandhi International Airport, Delhi</Descriptions.Item>
            <Descriptions.Item label="Date">12-12-2020</Descriptions.Item>
         </Descriptions>
       
         <Button onClick={handleClick}>Get Boarding Pass</Button>
        </>
    )
}