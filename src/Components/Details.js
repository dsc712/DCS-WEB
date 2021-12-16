import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Descriptions, message} from 'antd';



export const Details = (props) => {
    function handleClick() {
        message.success("Boarding Pass sent on registered email")
    }

    if(!props.isBooked) {
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
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
         </Descriptions>
         <Button onClick={handleClick}>Get Boarding Pass</Button>
        </>
    )
}