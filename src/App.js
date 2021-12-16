import React, { useState } from 'react';

import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from './Components/Home';
import { BookFlight } from './Components/BookFlight';
import { Details } from './Components/Details';
import { Nav3 } from './Components/Nav3';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

let flightDetails = false;

export const App = () => {
  // const [date, setDate] = useState(null);
  // const handleChange = value => {
  //   message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
  //   setDate(value);
  // };

  return (
    <BrowserRouter>
      <Layout className="layout">
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/BookFlight">
                  <BookFlight isBooked={flightDetails}/>
                </Route>
                <Route path="/Details">
                  <Details isBooked={flightDetails}/>
                </Route>
                <Route path="/nav3">
                  <Nav3 />
                </Route>
              </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>BookOL ©2020 Created by devs@BookOL</Footer>
      </Layout>
    </BrowserRouter>
  );
};

