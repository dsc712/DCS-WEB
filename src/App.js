import React from 'react';

import BookingContextProvider from "./Contexts/bookingContext";
import ActiveMenuContextProvider from "./Contexts/activeMenuContext";


import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Home } from './Components/Home';
import { BookFlight } from './Components/BookFlight';
import { Details } from './Components/Details';
import { Passenger } from './Components/Passenger';
import { Register } from './Components/Register';

import { Layout } from 'antd';
const { Content, Footer } = Layout;


export const App = () => {
  
  return (
    <ActiveMenuContextProvider>
      <BookingContextProvider>
        <BrowserRouter>
          <Layout className="layout">
            <Navbar />
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                  <Switch>
                    <Route path="/Home">
                      <Home />
                    </Route>
                    <Route path="/BookFlight">
                      <BookFlight/>
                    </Route>
                    <Route path="/Details">
                      <Details />
                    </Route>
                    <Route path="/Passenger">
                      <Passenger />
                    </Route>
                    <Route path="/Register">
                      <Register />
                    </Route>
                    <Redirect to="/Passenger" />
                  </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>BookOL ©2020 Created by devs@BookOL</Footer>
          </Layout>
        </BrowserRouter>
      </BookingContextProvider>
    </ActiveMenuContextProvider>
  );
};