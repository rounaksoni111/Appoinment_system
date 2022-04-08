import React, { useState, useEffect } from 'react';
import Nav2 from '../nav/Nav2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./cp.css";
import Button from '@mui/material/Button';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PasswordInfo from './PasswordInfo';
import UserAPI from '../../api/user';
import { useNavigate } from "react-router-dom";


const ChangePassword = () => {
    const [name, setName] = useState("");
    const [old_password, setOld_password] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    // form data input
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");
    //Error
    const [passwordError, setPasswordError] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("");

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);
    const handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);
    let Navigate = useNavigate();

    useEffect(() => {
        userData();
        getUserPassord();
    }, []);

    const getUserPassord = async () => {
        // console.log(JSON.parse(localStorage.getItem("data")).id)
        await UserAPI.getUserPassord({
            id : JSON.parse(localStorage.getItem("data")).id
        }).then((response) => {
            // console.log(response[0].password);
            setOld_password(response[0].password);
        })        
    }

    const userData =  () => {
        let data = localStorage.getItem("data");
        let data2 = (JSON.parse(data));
        setName(data2.username);
        // setRole(data2.role_id);
    }
    // const handleClick = () => {
    //     setShowPassword(prev => !prev);
    //     setShowPassword1(prev => !prev);
    //     setShowPassword2(prev => !prev);
    // }

    const save = async () => {
         if(old_password !== oldPassword || !oldPassword){
            setOldPasswordError("Error: Old Password is Not Matched");
        } else if(newPassword !== reEnterPassword || !newPassword || !reEnterPassword) {
            setPasswordError("Error: Password is Not Matched");
            setOldPasswordError("");
        } else {
            setOldPasswordError("");
            setPasswordError("");
            await UserAPI.updateNewPassword({
                id : JSON.parse(localStorage.getItem("data")).id,
                reEnterPassword : reEnterPassword
            }).then((response) => {                             
                console.log(response);
            })
            alert("Your Password has been Changed");;
            Navigate(`/record?id=${JSON.parse(localStorage.getItem("data")).id}`);

        }
    }

    const cancel = () => {
        window.location.reload(false);
    }

    return (
        <>
            <Nav2 name={name} hello="Hello," logout="LogOut" manage="ManageAppoinment" goback="GoBack" />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="a121">
                    <div className='b100'>
                        <div className="c101">
                            <div className='c102'>
                                <div className='c103'>

                                    <div className="roooow">
                                        <PasswordInfo/>
                                       
                                       
                                        <div className='cooool' style={{ marginTop: "50px" }}>
                                            <form className="form" noValidate autoComplete="off">
                                                <div className="form_data">
                                                    <TextField
                                                        label='Old Password'
                                                        variant="outlined"
                                                        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                                        onChange={(e) => { setOldPassword(e.target.value)}}
                                                        InputProps={{ // <-- This is where the toggle button is added.
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                    >
                                                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    />
                                                    <p className='err11'>{oldPasswordError}</p>
                                                    <br />



                                                    <TextField
                                                        label='New Password'
                                                        variant="outlined"
                                                        type={showPassword1 ? "text" : "password"} // <-- This is where the magic happens
                                                        onChange={(e) => { setNewPassword(e.target.value)}}
                                                        InputProps={{ // <-- This is where the toggle button is added.
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword1}
                                                                        onMouseDown={handleMouseDownPassword1}
                                                                    >
                                                                       {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    /> <br />

                                                    <TextField
                                                        label='Re-Enter'
                                                        variant="outlined"
                                                        type={showPassword2 ? "text" : "password"} // <-- This is where the magic happens
                                                        onChange={(e) => { setReEnterPassword(e.target.value)}}
                                                        InputProps={{ // <-- This is where the toggle button is added.
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword2}
                                                                        onMouseDown={handleMouseDownPassword2}

                                                                    >
                                                                        {showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                    /> 
                                                    <p className='err'>{passwordError}</p>
                                                    <br />

                                                    
                                                    <div className="save">
                                                        <Button variant="contained" 
                                                        onClick={save}
                                                        >Save</Button><br />
                                                    </div>
                                                    <div className="cancel">
                                                        <Button variant="outlined"
                                                        onClick={cancel}
                                                        >Cancel</Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>


        </>
    )
}

export default ChangePassword