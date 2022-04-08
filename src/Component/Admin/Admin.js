import React, { useState, useEffect } from 'react';
import "./admin.css";
// apis 
import UserAPI from '../../api/user';
import { useNavigate } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Nav2 from '../nav/Nav2';

const Admin = () => {
    const [AdminEmail, setAdminEmail] = useState("");
    const [ad_Password, setAd_Password] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([]);
    const [userPrf, setUsersprf] = useState([]);
    const [adminName, setAdminName] = useState("");



    useEffect(() => {
        UserAPI.getUser({}).then((response) => {
            setUsers(response);
        });
        UserAPI.getUserprf({}).then((response) => {
            setUsersprf(response);
        });
        userData();
    }, []);

    let Navigate = useNavigate();

    const Record = (value) => {
        Navigate(`/record?id=${value.user_id}`); // appoinment list
    }

    const userData = () => {
        let data = localStorage.getItem("data");
        let data2 = (JSON.parse(data));
          setAdminName(data2.username);
      }

    return (
        <>
            {/* <Navbar name="Admin" /> */}
            <Nav2 logout="LogOut" name={adminName} hello="Hello," home="Home" about="AboutUs"></Nav2>
            <div>
                <a href='/registration'>
                    <button className='regbtn'> Add Member</button>
                </a>
            </div>
            {/* <div className="Login">
                <h1> Admin Login </h1>
                <div className="LoginForm">
                    <input type="text" placeholder="Email...." onChange={(e) => { setAdminEmail(e.target.value); }} />
                    <input type="password" placeholder="Password..." onChange={(e) => { setAd_Password(e.target.value); }} />
                    <button className='loginbtn' onClick={Ad_login}>Login</button>
                    <h1 style={{ color: "red", marginTop: "2%" }}>{errorMessage}</h1>
                </div>
            </div> */}
            <div className='shhowtble'>
                <h2 className='usertbl'>User Table</h2>
                <div className='row1'>
                    <div className='column usertbll'>
                        {/* <h2 className='usertbl'>User Table</h2> */}
                        <table id="Table" style={{ marginBottom: "10%" }}>
                            <tbody>
                                <tr>
                                    <th> ID </th>
                                    <th > USERNAME </th>
                                    <th> EMAIL </th>
                                    <th> PASSWORD </th>
                                    <th> ROLE </th>
                                    <th> LOCATION </th>
                                </tr>
                                {
                                    users.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{value.id}</td>
                                                <td style={{ width: "70px" }}>{value.username}</td>
                                                <td>{value.email}</td>
                                                <td>{value.password}</td>
                                                <td>{value.role_name}</td>
                                                <td>{value.franchise_name}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='column userprftbll'>
                        {/* <h2 className='userprftbl'>User Profile Table</h2> */}
                        <table id="Table" style={{ marginBottom: "10%" }}>
                            <tbody>
                                <tr>
                                    <th > PHONE </th>
                                    <th > View Appoinment </th>
                                </tr>
                                {
                                    userPrf.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{value.phone}</td>
                                                <td>
                                                    <button className='appoi' id={value.user_id}
                                                        onClick={() => { Record(value); }}>
                                                        Action
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Admin;
