import React, { useState, useEffect } from 'react';
import Nav2 from '../nav/Nav2';
import moment from 'moment';
import DatePicker from 'react-date-picker';
import "./manAp.css";
import UserAPI from '../../api/user';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Button from 'react-bootstrap/Button';


const ManageAppoinment = () => {
    const [inputs, setInputs] = useState(
        (JSON.parse(localStorage.getItem("data"))) || ({ id: '', username: '', email: '', password: '', role_id: '' })
    );
    const [date, setDate] = useState(new Date());
    const [appoinTime, setAppoinTime] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [usersleave, setUsersleave] = useState([]);
    const [dateErrors, setDateErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [switchstate, setSwitchstate] = useState(true);

    const [oldAppoinData, setOldAppoinData] = useState([]);
    useEffect(async () => {
        await userData();
        await getUserLeave();

    }, []);

    useEffect(() => {
        getOldAppoinment();
        getUserLeave();
    }, [date]);

    useEffect(() => {
        // console.log(dateErrors);
        if (Object.keys(dateErrors).length === 0 && isSubmit) {
            // console.log(date);
        }
    }, [dateErrors]);


    const getUserLeave = async () => {
        // console.log(JSON.parse(localStorage.getItem("data"))[0]?.id);
        // console.log(JSON.parse(localStorage.getItem("data")).id);
        await UserAPI.getUserLeave({
            id: JSON.parse(localStorage.getItem("data")).id
        }).then((response) => {
            // console.log("useeff ", response);
            setUsersleave(response);
            if (response.find(ele => ele.date === moment(date).format('YYYY-MM-DD'))) {
                setSwitchstate(false)
            } else {
                setSwitchstate(true)
            }
        });
    }

    const getOldAppoinment = async (id) => {
        // var date = date.getFullYear() + '-' + String(selecteddate.getMonth() + 1).padStart(2, "0") + '-' + String(selecteddate.getDate()).padStart(2, "0");
        // console.log("date", date);
        const res = await UserAPI.getOldAppoinment({
            user_id: inputs.id,
            date: moment(date).format('YYYY-MM-DD')
        }).then((response) => {
            // console.log("getOldAppoinment..", response);
            setOldAppoinData(response)
        });
    }

    // const DateValidation = (date) => {
    //     const errors = {};
    //     if (!date) {
    //         errors.date = "*Error: Date is required !!";
    //     } else if (date === "") {
    //         errors.date = "*Error: Date is required !!";
    //     }
    //     return errors;
    // };


    const userData = async () => {
        await UserAPI.getOldAppoinment({
            user_id: inputs.id,
            date: moment(date).format('YYYY-MM-DD')
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

    const handleChange = async (value) => {
        console.log(value)
        setSwitchstate(false)
        const is_available = value === true ? 1 : 0;
        const selected = (usersleave || []).find(ele => ele.date === moment(date).format('YYYY-MM-DD'));
        // let Selecteddate = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, "0") + '-' + String(date.getDate()).padStart(2, "0");
        // console.log(date)    
        // setDateErrors(DateValidation(date));
        // setIsSubmit(true);
        if (date !== null && date !== undefined && date.length !== 0) {
            const res = await UserAPI.setAvailablity({
                id: selected?.id,
                user_id: inputs.id,
                date: moment(date).format('YYYY-MM-DD'),
                is_available: is_available,
                time_period: timePeriod,
                time: appoinTime
            }).then((response) => {
                console.log(response);
                alert("date selectedd " + date);
                // setIsSubmit(false);
            });
            getUserLeave();
        }
    }

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

    return (
        <>
            <Nav2 logout="LogOut" goback="goBack"></Nav2>
            <div className='a121'>
                <div className='c101' style={{ marginTop: "15px" }}>
                    <div className='c102' style={{ height: "auto", paddingBottom: "100px" }}>
                        <div className='c103'>
                            <h3 > Dear <b>{inputs?.username}</b>, Set Your Availablity  </h3>
                        </div>

                        <div className='c104 b1001'>
                            <h4 className='c105'> Select Time</h4>
                            <input type="text" className='timerTextbox' value={timePeriod} placeholder=" Select Time"
                                onChange={(event) => { setAppoinTime(event.target.value); }} />
                            {/* <Button variant="outline-dark" className='clearbutton' onClick={clearTimeBox}>X</Button> */}
                            <p style={{ display: "inline", marginLeft: "103px", marginBottom: "-1px", color: "red" }}></p>
                            <fieldset className='c107'>

                                <div className='timerbtn col-10 ' >
                                    {
                                        timeBoard.map((ele, index) => {
                                            const isMatched = oldAppoinData.find((value, key) => value.time === ele.value || value.date === date);
                                            return (
                                                <Button
                                                    key={index.toString()}
                                                    className='b123'
                                                    type="button"
                                                    value={ele.value}
                                                    onClick={() => { handleTimeSelection(ele) }}
                                                    disabled={isMatched}
                                                // style={myStyle}
                                                >
                                                    {moment(ele.value, 'HH:mm A').format('HH:mm A')}
                                                </Button>
                                            )
                                        })
                                    }
                                </div>
                            </fieldset>
                        </div>

                        <div className='calend'>
                            <div className='roow'>
                                <div className='cooll'>
                                    <h4 className='c105'> Select Date*</h4>
                                </div>
                                <div className='cooll celu'>
                                    <DatePicker
                                        value={date}
                                        format="dd/MM/yyyy"
                                        style={{ float: "left", width: '100%', height: "10px", }}
                                        onChange={setDate}
                                        minDate={new Date()}
                                    />
                                    <p style={{ marginLeft: "5px", color: "red" }}>{dateErrors.date}</p>
                                </div>
                                <div className='cooll switchh' >
                                    {/* <button label="Is Available" onChange={handleChange} style={{ marginLeft: "50px" }}> Set Availablity </button> */}
                                    <BootstrapSwitchButton
                                        checked={switchstate}
                                        onlabel='ON'
                                        offlabel='OFF'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='leaveTable123' >
                            <h3>leave table</h3>
                            <table id="Table" className='tbbble123'>
                                <tbody>
                                    <tr>
                                        <th> ID </th>
                                        <th> Date </th>
                                        <th> Time_period </th>
                                        <th> Time </th>
                                        <th> Is_Available </th>
                                        <th> Is_Active </th>
                                    </tr>
                                    {
                                        usersleave.map((value, key) => {
                                            return (
                                                <tr key={key.toString()}>
                                                    <td>{value.id}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.time_period}</td>
                                                    <td>{value.time}</td>
                                                    <td>{value.is_available}</td>
                                                    <td>{value.is_active}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ManageAppoinment