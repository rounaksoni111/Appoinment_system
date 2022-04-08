import React, { useState, useEffect } from 'react';
import "./login.css";
import CustomInput from "../Tags/CustomInput";
import Button from "../Tags/Button";
import { useNavigate } from "react-router-dom";
// apis 
import UserAPI from '../../api/user';


// Fuction start
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    

    useEffect(() => {
        // localStorage.setItem("email", null);
        localStorage.setItem("data", null);
        if (localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", true);
        }
    }, []);

    let Navigate = useNavigate()

    const login = async () => {
        const response = await UserAPI.login({
            email: email,
            password: password,
        })
        // console.log(response);
        if (response.loggedIn) {
            localStorage.setItem("LoggedIn", true);
            // localStorage.setItem("email", response.email);
            localStorage.setItem("data", JSON.stringify(response.result));
            // console.log(response.result);
            // console.log(JSON.stringify(response.result));
            Navigate("/");
        } else {
            setErrorMessage(response.message);
            // alert("Wrong username/password");
        }
    };
    

    return (
        <>
            <div className="App">
                <h2 style={{ marginTop : "2%" , marginBottom : "-2%"}}> Staff Login </h2>
                <form className="form">
                    <CustomInput
                        labelText="Email"
                        handleChange={(e) => { setEmail(e.target.value)}}
                        type="text"
                        
                    />
                    <CustomInput
                        labelText="Password"
                        handleChange={(e) => { setPassword(e.target.value); }}
                        type="password"
                     
                    />

                    <Button type="button" color="primary" className="form__custom-button" onClick={login}>
                        Log in
                    </Button>
                    <h1 style={{ color: "red" }}>{errorMessage}</h1>
                </form>
            </div>

            
        </>
    )
};

export default Login;
