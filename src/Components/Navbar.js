import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;


export const Navbar = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal"  style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                <Menu.Item key="1">
                    <Link to="/">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/BookFlight">
                        Book Now
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/Details">
                        Booking Details
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/nav3">
                        Nav 3
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}