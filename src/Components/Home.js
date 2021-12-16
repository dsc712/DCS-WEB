import React, { Component } from 'react';
import { Carousel } from 'antd';


const contentStyle = {
  height: '80px',
  color: '#fff',
  lineHeight: '80px',
  textAlign: 'center',
  background: '#364d79'
};

export const Home = () => {
    return (
        <Carousel dotPosition="top" autoplay={true} >
        <div>
          <h3 style={contentStyle}>
              Book your flights
          </h3>
          <img style={{ width: "100%" }} src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"/>
        </div>
        <div>
          <h3 style={contentStyle}>
              Hassle free boarding
          </h3>
          <img style={{ width: "100%"}} src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"/>
        </div>
        <div>
          <h3 style={contentStyle}>
              New intelligent departure control system 
          </h3>
          <img style={{ width: "100%"}} src="https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"/>
        </div>
        <div>
          <h3 style={contentStyle}>
              Book your journey with us.
          </h3>
          <img style={{ width: "100%"}} src="https://images.unsplash.com/photo-1593182440709-4b7b56482c55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"/>
        </div>
      </Carousel>
    )
}