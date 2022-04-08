import React, {useState, useEffect} from 'react';
import "./About.css";
import Navbar from "../nav/Navbar"; 
import Nav2 from '../nav/Nav2';

const About = () => {
    const [adminName, setAdminName] = useState("");

    useEffect(() => {
        // userData();
      }, []);
    
  //   const userData = () => {
  //   let data = localStorage.getItem("data");
  //   let data2 = (JSON.parse(data));
  //   data2.map((value, key) => {
  //     let data3 = value.username;
  //     setAdminName(data3);
  //   })
  // }




    
    return (
        <>
            <Nav2  logout="LogOut" login="Login" goback="GoBack"></Nav2>
            <h1 className='Appoin'>Appoinment schedulers </h1>
            <p className='p1'>
                Appointment schedulers are business tools that allow clients to book,
                reschedule, and cancel appointments through a web interface. When clients
                want to make an appointment, they go to your business's website, Facebook
                page, or anywhere else the booking software is supported, and choose an
                available date and time.
            </p>

            <p className='p1'>
                On the backend, you enter parameters about when people can book certain services, 
                based on business hours you set as well as the times and dates that your staff or
                other resources are available. The app also prevents double booking and over-booking,
                and gives you the flexibility to block off times when certain services may be unavailable. 
                Say you run a pet grooming business and your poodle cutting specialist takes a two-week 
                vacation. You can enter her days off in the appointment scheduling app ahead of time so 
                that your clients won't be able to book any poodle grooming time during the days that she's 
                gone.
            </p>

        </>
    )
};

export default About;
