import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Nav2 from "../nav/Navbar";
import "./Sch.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import UserAPI from '../../api/user';
import { useNavigate } from "react-router-dom";
import user from '../../api/user';
import Navbar from '../nav/Navbar';
import addDays from 'date-fns/addDays'

import DatePicker from 'react-date-picker';


// or less ideally
// import { Button } from 'react-bootstrap';


const Schedule = () => {
  //  Staff/ doctor's data
  const [inputs, setInputs] = useState({ id: '', first_name: '', last_name: '', role_name: '', franchise_id: '' });
  // insert value
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [appoinTime, setAppoinTime] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [selecteddate, setSelectedDate] = useState(new Date());
  const [reference, setReference] = useState("")
  // validation
  const [nameErrors, setNameErrors] = useState({});
  const [contactErrors, setContactErrors] = useState({});
  const [appoinDateErrors, setAppoinDateErrors] = useState({});
  const [appoinTimeErrors, setAppoinTimeErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [oldAppoinData, setOldAppoinData] = useState([]);
  const [oldAppoinDay, setOldAppoinDay] = useState([]);

  const id = new URLSearchParams(window.location.search).get('id');


  useEffect(() => {
    getUserById(id);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      userData();
      // console.log("yeess")
    }
  }, [localStorage.getItem("data")]);

  useEffect(() => {
    getOldAppoinment(id);
    getDoctorLeave(id);
    setTimePeriod([]);
  }, [selecteddate]);


  useEffect(() => {
    // console.log(appoinDateErrors);
    if (Object.keys(appoinDateErrors).length === 0 && isSubmit) {
      // console.log(selecteddate);
    }
  }, [appoinDateErrors]);

  useEffect(() => {
    // console.log(appoinTimeErrors);
    if (Object.keys(appoinTimeErrors).length === 0 && isSubmit) {
      // console.log(appoinTime);
    }
  }, [appoinTimeErrors]);

  useEffect(() => {
    // console.log(nameErrors);
    if (Object.keys(nameErrors).length === 0 && isSubmit) {
      // console.log(username);
    }
  }, [nameErrors]);

  useEffect(() => {
    // console.log(contactErrors);
    if (Object.keys(contactErrors).length === 0 && isSubmit) {
      // console.log(contact);
    }
  }, [contactErrors]);

  const NameValidation = (username) => {
    const reg = /^[A-Za-z\s]+$/;
    const errors = {};
    if (!username) {
      errors.username = "Name is required";
    } else if (!reg.test(username)) {
      errors.username = "Number not allow";
    }
    return errors;
  };

  const ContactValidation = (contact) => {
    const errors = {};
    var phoneno = /^\d{10}$/;
    if (!contact) {
      errors.contact = "Number is required";
    } else if (!phoneno.test(contact)) {
      errors.contact = "Enter Valid Number";
    }
    return errors;
  };



  const AppoiDateValidation = (selecteddate) => {
    const errors = {};
    if (!selecteddate) {
      errors.selecteddate = "*Error: Date is required !!";
    }
    return errors;
  };


  const AppoiTimeValidation = (appoinTime) => {
    const errors = {};
    if (!appoinTime) {
      errors.appoinTime = "*Error: Meeting Time is required !!";
    }
    return errors;
  };

  const userData = () => {
    let data = localStorage.getItem("data");
    let data2 = (JSON.parse(data));
    setReference(data2.username);
  }


  const getUserById = async (id) => {
    const res = await UserAPI.getUserById({
      user_id: id
    });
    if (res[0] && Object.keys(res[0]).length > 0) {
      setInputs(res[0]);
    }
  }

  const getDoctorLeave = async (id) => { // leaves
    const res = await UserAPI.getDoctorLeave({
      id: id,
      date: moment(selecteddate).format('YYYY-MM-DD')
    }).then((response) => {
      console.log("getDoctorLeave..", response);
      setOldAppoinDay(response)

    });
  }



  const getOldAppoinment = async (id) => {
    // var date = selecteddate.getFullYear() + '-' + String(selecteddate.getMonth() + 1).padStart(2, "0") + '-' + String(selecteddate.getDate()).padStart(2, "0");
    // console.log("date", date);
    const res = await UserAPI.getOldAppoinment({
      user_id: id,
      date: moment(selecteddate).format('YYYY-MM-DD')
    }).then((response) => {
      // console.log("getOldAppoinment..", response);
      setOldAppoinData(response)
    });
  }

  const handleTimeSelection = (ele) => {
    // console.log(ele);
    setAppoinTime(ele.value);
    setTimePeriod(ele.label);
  }

  let Navigate = useNavigate();


  const timeBoard = [
    { value: '09:00:00', label: '09:00 AM - 09:30 AM' },
    { value: '09:30:00', label: '09:30 AM - 10:00 AM' },
    { value: '10:00:00', label: '10:00 AM - 10:30 AM' },
    { value: '10:30:00', label: '10:30 AM - 11:00 AM' },
    { value: '11:00:00', label: '11:00 AM - 11:30 AM' },
    { value: '11:30:00', label: '11:30 AM - 12:00 PM' },

    { value: '12:00:00', label: '12:00 PM - 12:30 PM' },
    { value: '12:30:00', label: '12:30 PM - 13:00 PM' },
    { value: '13:00:00', label: '13:00 PM - 13:30 PM' },
    { value: '13:30:00', label: '13:30 PM - 14:00 PM' },
    { value: '14:00:00', label: '14:00 PM - 14:30 PM' },
    { value: '14:30:00', label: '14:30 PM - 15:00 PM' },

    { value: '15:00:00', label: '15:00 PM - 15:30 PM' },
    { value: '15:30:00', label: '15:30 PM - 16:00 PM' },
    { value: '16:00:00', label: '16:00 PM - 16:30 PM' },
    { value: '16:30:00', label: '16:30 PM - 17:00 PM' },
    { value: '17:00:00', label: '17:00 PM - 17:30 PM' },
    { value: '17:30:00', label: '17:30 PM - 18:00 PM' },

    { value: '18:00:00', label: '18:00 PM - 18:30 PM' },
    { value: '18:30:00', label: '18:30 PM - 19:00 PM' },

  ];

  const appoin_schedule = async () => {
    setAppoinTimeErrors(AppoiTimeValidation(appoinTime));
    setAppoinDateErrors(AppoiDateValidation(selecteddate));
    setNameErrors(NameValidation(username));
    setContactErrors(ContactValidation(contact));
    setIsSubmit(true);
    if (Object.keys(appoinTimeErrors).length === 0 && Object.keys(nameErrors).length === 0 && Object.keys(contactErrors).length === 0 && Object.keys(appoinDateErrors).length === 0 && isSubmit) {
      const res = await UserAPI.appoinment_record({
        franchise_id: inputs?.franchise_id,
        user_id: inputs?.user_id,
        date: moment(selecteddate).format('YYYY-MM-DD'),
        time_period: timePeriod,
        time: appoinTime
      }).then((response) => {
        console.log(response);
      setIsSubmit(false);
      });
      const resp = await UserAPI.appointed_client({
        franchise_id: inputs?.franchise_id,
        user_id: inputs?.user_id,
        name: username,
        contact: contact,
        reference: reference
      }).then((response) => {
        console.log(response);
      });
      setSelectedDate("");
      setAppoinTime("");
      setUsername("");
      setContact("");
      alert('Appoinment Scheduled');
      Navigate("/");
    }
  }
  return (
    <>
      <Navbar />
      <div className='a121'>
        <h1 className='b100'> Schedule Appoinment with ({inputs?.role_name}) {inputs?.first_name} {inputs?.last_name} {/*{inputs?.franchise_id} {inputs?.user_id}*/} </h1>
        <div className='c101'>
          <div className='c102'>
            <div className='c103'>
              <div className='c104'>
                <h4 className='c105'> Select Date*</h4>
                <div className='c106'>

                  <DatePicker
                    selected={selecteddate}
                    value={selecteddate}
                    onChange={date => setSelectedDate(date)}
                    minDate={new Date()}
                    format="dd/MM/yyyy"
                  />
                  <p style={{ marginLeft: "5px", color: "red" }}>{appoinDateErrors.selecteddate}</p>
                </div>
              </div>


              <div className='c104 b101'>
                <h4 className='c105'> Select Time*</h4>
                <input type="text" className='timerTextbox' value={timePeriod} placeholder=" Select Time"
                  /*onChange={(event) => { setAppoinTime(event.target.value); }}*/ />
                <p style={{ display: "inline", marginLeft: "103px", marginBottom: "-1px", color: "red" }}>{appoinTimeErrors.appoinTime}</p>
                <fieldset className='c107'>

                  <div className='timerbtn col-10 ' >
                    {
                      timeBoard.map((ele, index) => {
                        const isMatched = oldAppoinData.find((value, key) => value.time === ele.value) ||
                          oldAppoinDay.find((data, key) => data.time === ele.value) ||
                          oldAppoinDay.find((data, key) => data.date === selecteddate || data.time === '00:00:00');  
                        return (
                          <Button
                            className='b123'
                            type="button"
                            value={ele.value} 
                            onClick={() => { handleTimeSelection(ele) }}
                            disabled={isMatched}
                          >
                            {moment(ele.value, 'HH:mm A').format('HH:mm A')}
                          </Button>
                        )
                      })
                    }
                  </div>
                </fieldset>
              </div>

              <div className='roow'>
                <div className='cool'>
                  <h4 className='c105'> Name*</h4>
                  <div className='d106'>
                    <input type="text" className='d107' onChange={(event) => { setUsername(event.target.value); }} />
                  </div>
                  <p style={{ marginLeft: "10px", color: "red" }}>{nameErrors.username}</p>
                </div>
                <div className='cool'>
                  <h4 className='c105'> Contact*</h4>
                  <div className='d106'>
                    <input type="text" className='d107' onChange={(event) => { setContact(event.target.value); }} />
                  </div>
                  <p style={{ marginLeft: "10px", color: "red" }}>{contactErrors.contact}</p>
                </div>
                <div className='cool'>
                  <h4 className='c105'> Reference</h4>
                  <div className='d106'>
                    <input type="text" className='d107'
                      value={reference}
                    // onChange={(event) => { setReference(event.target.value); }}
                    />
                  </div>
                </div>
              </div>
              <div className='e100'>
                <button className='e101' onClick={appoin_schedule} >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Schedule;
