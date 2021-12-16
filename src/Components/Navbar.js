import React, { useContext } from 'react';
import { ActiveMenuContext } from "../Contexts/activeMenuContext";

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export const Navbar = () => {
    const { active, setActiveMenu } = useContext(ActiveMenuContext);

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" selectedKeys={active} style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
                <Menu.Item key="1" onClick={(e) => {setActiveMenu("1")}}>
                    <Link to="/Home">
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
                <Menu.Item key="4" onClick={(e) => {setActiveMenu("4")}}>
                    <Link to="/Passenger">
                        Account
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}