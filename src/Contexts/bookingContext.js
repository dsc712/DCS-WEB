import React, { createContext, useState } from "react";

export const BookingContext = createContext();
const BookingContextProvider = props => {
  const [isBooked, setBooking] = useState({ isBooked: false });
  const bookingToggle = () => {
    setBooking(!isBooked);
  };
  return (
    <BookingContext.Provider value={{ isBooked, bookingToggle }}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;