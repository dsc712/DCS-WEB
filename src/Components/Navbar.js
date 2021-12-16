import React, { Component, useContext } from 'react';
import { BookingContext } from "../Contexts/bookingContext";
import { ActiveMenuContext } from "../Contexts/activeMenuContext";

import { Layout, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;



export const Navbar = () => {
    const { isBooked, bookingToggle } = useContext(BookingContext);
    const { active, setActiveMenu } = useContext(ActiveMenuContext);

    const onChange = () => {
        bookingToggle(!isBooked);
    }

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" selectedKeys={active} style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                <Menu.Item key="1" onClick={(e) => {setActiveMenu("1")}}>
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={(e) => {setActiveMenu("2")}}>
                    <Link to="/BookFlight">
                        Book Now
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={(e) => {setActiveMenu("3")}}>
                    <Link to="/Details">
                        Booking Details
                    </Link>
                </Menu.Item>
                {/* <Menu.Item key="4">
                    <Link to="/nav3">
                        Nav 3
                    </Link>
                </Menu.Item> */}
                <Switch defaultChecked onChange={onChange} />
            </Menu>
        </Header>
    )
}