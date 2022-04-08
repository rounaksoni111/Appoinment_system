import React, { useState, useEffect } from 'react';
import "../Login/login.css";
import CustomInput from "../Tags/CustomInput";
import Button from "../Tags/Button";
import { useNavigate } from "react-router-dom";
// apis 
import UserAPI from '../../api/user';

import Navbar from '../nav/Navbar';
import Nav2 from '../nav/Nav2';



const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // localStorage.setItem("email", null);
        localStorage.setItem("data", null);
        localStorage.setItem("accessToken", null);
        localStorage.setItem("loggedIn", false);

    }, []);

    let Navigate = useNavigate()

    const AdminLogin = async () => {
        const response = await UserAPI.AdminLogin({
            email: email,
            password: password,
        })
        if (response.loggedIn) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("data", JSON.stringify(response.data.user));
            localStorage.setItem("accessToken", response.data.accessToken);
            // console.log(response.data.accessToken)
            let role_id = JSON.stringify(response.data.user.role_id) 
            if(role_id == 2) {
                Navigate("/AdminPannel") 
            }else if(role_id == 3){
                Navigate(`/record?id=${response.data.user.id}`)
            }else {
                Navigate('/')
            }
        } else {
            setErrorMessage(response.message);
            // alert("Wrong username/password");
        }
    };

    return (
        <>
            {/* <Navbar/> */}
            <Nav2 back="Home"  ></Nav2>
            <div className="App">
                <h2 style={{ marginTop: "2%", marginBottom: "-2%" }}> Login </h2>
                <form className="form">
                    <CustomInput
                        labelText="Email"
                        handleChange={(e) => { setEmail(e.target.value) }}
                        type="text"

                    />
                    <CustomInput
                        labelText="Password"
                        handleChange={(e) => { setPassword(e.target.value); }}
                        type="password"

                    />

                    <Button type="button" color="primary" className="form__custom-button" onClick={AdminLogin} >
                        Log in
                    </Button>
                    <h1 style={{ color: "red" }}>{errorMessage}</h1>
                </form>
            </div>
        </>
    );
}

export default AdminLogin;
