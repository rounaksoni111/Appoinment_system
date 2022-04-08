import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Navbar from "../nav/Navbar";
import UserAPI from '../../api/user';
import "./record.css";
import Nav2 from "../nav/Nav2";
import DatePicker from 'react-date-picker';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { user } from '../../utils/jwt';

const Record = () => {
    const [users, setUsers] = useState([]);
    const [NavName, setNavName] = useState("");
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    const [usersleave, setUsersleave] = useState([]);
    const [adminName, setAdminName] = useState("");
    const [changePwd, setChangePwd] = useState("ChnagePassword");
    
    useEffect(() => {
        getUserDataByID(id);
        getUserById(id);

    }, []);



    useEffect(() => {
        let data = localStorage.getItem("data");
        let userinfo = (JSON.parse(data));
        let username = userinfo.username
        setAdminName(username);
        if (username == "Rounak") {
            setChangePwd("");
            // console.log("true", username);
            UserAPI.getUserLeave({
                id: id
            }).then((response) => {
                // console.log(response);
                setUsersleave(response);
            });

        } else {
            console.log("false", username);

        }
    }, []);

    const id = new URLSearchParams(window.location.search).get('id');
    const getUserDataByID = async (id) => {
        var day = minDate.getDate();
        var month = minDate.getMonth() + 1;
        var year = minDate.getFullYear();
        var miinDate = year + '-' + month + "-" + day;

        var day1 = maxDate.getDate();
        var month1 = maxDate.getMonth() + 1;
        var year1 = maxDate.getFullYear();
        var maxxDate = year1 + '-' + month1 + "-" + day1;
        // var mxxnDate = day1;

        // var miinDate = day;
        // console.log("miindate", miinDate);
        await UserAPI.getUserDataByID({
            user_id: id,
            minDate: moment(minDate).format('YYYY-MM-DD'),
            maxDate: moment(maxDate).format('YYYY-MM-DD')
        }).then((response) => {
            console.log("getUserDataByID",response);
            setUsers(response);
        });
    }


    const filterData = async () => {
        var day = minDate.getDate();
        var month = minDate.getMonth() + 1;
        var year = minDate.getFullYear();
        var miinDate = year + '-' + month + "-" + day;
        // var miinDate = day;
        console.log("miindate",miinDate);

        var day1 = maxDate.getDate();
        var month1 = maxDate.getMonth() + 1;
        var year1 = maxDate.getFullYear();
        var maxxDate = year1 + '-' + month1 + "-" + day1;
        // var mxxnDate = day1;
        console.log("maxxdate",maxxDate);


        const res = await UserAPI.filterData({
            id: id,
            minDate:  moment(minDate).format('YYYY-MM-DD'),
            maxDate: moment(maxDate).format('YYYY-MM-DD')
        }).then((response) => {
            console.log(response);
            setUsers(response);
        });
    }


    const getUserById = async (id) => {
        const res = await UserAPI.getUserById({
            user_id: id
        });
        if (res[0] && Object.keys(res[0]).length > 0) {
            // setInputs(res[0]);
            // console.log(res[0]);
            setNavName(res[0].first_name)
        }
    }



    return (
        <>

            {/* <Navbar login="Login"/> */}
            <Nav2 logout="LogOut" manage="ManageAppoinment" password={changePwd}  />

            <div className='Apointbl'>
                <div className='dateFilter'>
                    <h4 className='lab'>Date Filter</h4>

                    <label className='label'>From :</label>
                    <DatePicker format="dd/MM/yyyy" name="startDate" value={minDate} onChange={setMinDate}
                    /*onChange={(date) => setMinDate(date)}*/ />

                    <label className='label lb2'>To :</label>
                    <DatePicker format="dd/MM/yyyy" name="endDate" value={maxDate} /*onChange={setMaxDate}*/
                        onChange={(date) => setMaxDate(date)} />

                    <Button variant="primary" className='Filterbtn' onClick={filterData}>Filter</Button>

                </div>
                <h4 className='head'><b>{NavName}</b>, You Have Appoinment with </h4>
                <div className='row2'>
                    <div className='column2'>
                        {/* <h2 className='usertbl'>User Table</h2> */}
                        <table id="Table" style={{ marginBottom: "10%" }} className="tablee">
                            <tbody>
                                <tr>
                                    <th className="apoinTableeader "> Appoinment_id </th>
                                    <th className="apoinTableeader "> Name </th> {/*  jisne appoinment li */}
                                    <th className="apoinTableeader "> Contact </th> {/*  jisne appoinment li */}
                                    <th className="apoinTableeader "> Date </th>
                                    <th className="apoinTableeader "> Time </th>
                                    <th className="apoinTableeader "> Time_Period </th>
                                    <th className="apoinTableeader "> Reference </th>
                                </tr>
                                {
                                    users.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className=''>{value.id}</td>
                                                <td className=''>{value.name}</td>
                                                <td className=''>{value.contact}</td>
                                                <td className=''>{value.DATE}</td>
                                                <td className=''>{value.time}</td>
                                                <td className=''>{value.time_period}</td>
                                                <td className=''>{value.reference}</td>

                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='leaveTable recordleave' style={{ visibility: adminName == "Rounak" ? 'visible' : 'hidden' }} >
                    <h3 style={{ marginTop: "-60px", marginLeft: "40px", marginBottom: "15px" }}><b>{NavName}</b>' leave table</h3>
                    <table id="Table" className='adminshowr' >
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
                                    return (<>
                                        <tr key={key}>
                                            <td>{value.id}</td>
                                            <td>{value.date}</td>
                                            <td>{value.time_period}</td>
                                            <td>{value.time}</td>
                                            <td>{value.is_available}</td>
                                            <td>{value.is_active}</td>
                                        </tr>
                                    </>
                                    );
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Record;
