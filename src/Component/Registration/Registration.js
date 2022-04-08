import React, { useState, useEffect } from 'react';
import UserAPI from '../../api/user';
import "./reg.css";
import { useNavigate } from "react-router-dom";
// import Navbar from "../nav/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav2 from '../nav/Nav2';

const Registration = () => {
    const [role, setRole] = useState([]);
    const [franchise, setFranchise] = useState([]);
    const [userid, setuserid] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [roleval, setRoleval] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [franchise_id, setFranchise_id] = useState("");
    const [EmailErrors, setEmailErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [adminName, setAdminName] = useState("");

    let Navigate = useNavigate();

    const register = () => {
        setEmailErrors(Emailvalidate(email));
        setIsSubmit(true);
        if (Object.keys(EmailErrors).length === 0 && isSubmit) {
            const res = UserAPI.registeruser({
                username: firstname,
                role_id: roleval,
                email: email,
                password: password,
                franchise_id: franchise_id
            }).then((response) => {
                console.log(response);
            });
            const res2 = UserAPI.registeruserprof({
                userid: userid,
                firstname: firstname,
                lastname: lastname,
                phone: phone,
            }).then((response) => {
                console.log(response);
            });
            alert("registration success..");
            Navigate("/admin");
            setIsSubmit(false);
        }
    }

    useEffect(() => {
        getRole();
        getfranchise();
        getMaxUserID();
        userData();
    }, []);

    const getRole = () => {
        UserAPI.getRole({}).then((response) => {
            setRole(response)
        });
    };

    const getfranchise = () => {
        UserAPI.getfranchise({}).then((response) => {
            // console(response);
            setFranchise(response);
        });
    };


    const getMaxUserID = () => {
        UserAPI.getMaxUserID({}).then((response) => {
            // console.log(JSON.stringify(response));
            response.map((value, key) => {
                setuserid(value.maxid + 1)
                console.log("userid",value.maxid + 1)
            })
        });
    };

    const Emailvalidate = (email) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
            errors.email = "Email is required!";
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    };

    useEffect(() => {
        console.log(EmailErrors);
        if (Object.keys(EmailErrors).length === 0 && isSubmit) {
            console.log(email);
        }
    }, [EmailErrors]);

    const userData = () => {
        let data = localStorage.getItem("data");
        let data2 = (JSON.parse(data));
        
          setAdminName(data2.username);
      }
    


    return (
        <>
            {/* <Navbar name="New User" /> */}
            <Nav2 logout="LogOut" home="Home" hello="Hello,"  name={adminName} MemberList="MemberList"/>

            <div className='Register'>
                <h1>Registration</h1>
                <div className="RegisterForm">
                    <div className='namee a1'>
                        <input type="text" className='name' placeholder=" First_Name..." onChange={(e) => { setFirstname(e.target.value); }} />
                        <input type="text" className='name name2' placeholder=" Last_Name..." onChange={(e) => { setLastname(e.target.value); }} />
                    </div>
                    <select className="Role a1" onChange={(e) => { setRoleval(e.target.value); }} >
                        <option value="" selected disabled>-- Select Role --</option>
                        {
                            role.map((value, key) => {
                                return (
                                    <option value={value.id}>{value.role_name}</option>
                                );
                            })
                        }
                    </select>
                    {/* <input type="text" className='userid' placeholder=" User Id..." onChange={(e) => { setuserid(e.target.value); }} /> */}
                    <div className='email a1'>
                        <input type="text" placeholder=" Email..." onChange={(e) => { setEmail(e.target.value); }} />
                        <p style={{ marginLeft: "2px", color: "red" }}>{EmailErrors.email}</p>
                    </div>
                    <div className='password a1'>
                        <input type="password" placeholder=" Password..." onChange={(e) => { setPassword(e.target.value); }} />
                    </div>

                    <div className='phone a1'>
                        <input type="text" placeholder=" Phone..." onChange={(e) => { setPhone(e.target.value); }} />
                    </div>
                    {/* <div className='status-isactive a1'>
                        <select className='status' onChange={(e) => { setStatus(e.target.value); }}>
                            <option value="" selected disabled>- Status -</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                        <select className='isactive' onChange={(e) => { setIsActive(e.target.value); }}>
                            <option value="" selected disabled>- Is_active -</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className='created-updated status-isactive a1'>
                        <select className='createdby' onChange={(e) => { setCreatedby(e.target.value); }}>
                            <option value="" selected disabled>-Created_by -</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                        <select className='updatedby' onChange={(e) => { setUpdatedby(e.target.value); }}>
                            <option value="" selected disabled>-Updated_by -</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div> */}
                    <div>
                        <select className="location a1" onChange={(e) => { setFranchise_id(e.target.value); }}>
                            <option value="" selected disabled>-- Select Location --</option>
                            {
                                franchise.map((value, key) => {
                                    return (
                                        <option value={value.id}>{value.franchise_name}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <Button className='registration' type="submit" onClick={register}> Submit </Button>
                </div>
            </div>
        </>
    )
};

export default Registration;
