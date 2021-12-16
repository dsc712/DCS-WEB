import React, { createContext, useState } from "react";

const userlist = [
    {
        passengerID: "2020sp93040",
        name: "Devyendu",
        telephone: "+91 8076851xxx",
        bookings: [{
            from: "Kempegowda International Airport, Bengaluru",
            to: "Indira Gandhi International Airport, Delhi",
            date: "12-12-2020"
        }]
    }
]

const activeUser = userlist[0];

export const BookingContext = createContext();
const BookingContextProvider = props => {
  const [users, setUsers] = useState(userlist)
  const [user, setUser] = useState(activeUser)

  const addNewUser = (user) => {
    console.log("sdfsdfsd", user)
    setUsers([...users, user]);
  }

  const setActiveUser = (auth) => {
    setUser(auth)
  }

  const bookTicket = (order) => {
    console.log(order)
    user.bookings.push(order);
  }

  return (
    <BookingContext.Provider value={{ user, users, addNewUser, setActiveUser, bookTicket }}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;