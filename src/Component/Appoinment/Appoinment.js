import React, { useState, useEffect, Suspense, lazy } from 'react';
import "./Appoinment.css"
import UserAPI from '../../api/user';
import { useNavigate } from "react-router-dom";
import Nav2 from '../nav/Nav2';
import PageLoader from "../loading/PageLoader";
// import Alert from '@mui/material/Alert';


const Appoinment = () => {
  
  const [franchise, setFranchise] = useState([]);
  const [role, setRole] = useState([]);
  const [locVal, setLocVal] = useState("");
  const [roleVal, setRoleVal] = useState("");
  const [resultasDoctor, setresultasDoctor] = useState([]);
  const [username, setUsername] = useState("");
  const [franchiseInputError, setfranchiseInputError] = useState({});
  const [roleInputError, setroleInputError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [buttonAvail, setButtonAvail] = useState(true)

  useEffect(() => {
    getfranchise();
    getRoleforAppoin();
  }, []);


  useEffect(() => {
    if(localStorage.getItem("loggedIn") === "true") {
      userData();
      // console.log("yeess")
    } 
  }, [localStorage.getItem("data")]);


  useEffect(() => {
    console.log(franchiseInputError);
    if (Object.keys(franchiseInputError).length === 0 && isSubmit) {
      console.log(locVal);
    }
  }, [franchiseInputError]);

  useEffect(() => {
    console.log(roleInputError);
    if (Object.keys(roleInputError).length === 0 && isSubmit) {
      console.log(roleVal);
    }
  }, [roleInputError]);

  const FranchiseValidation = (locVal) => {
    const errors = {};
    if (!locVal) {
      errors.locVal = "Fanchise is required";
    }
    return errors;
  };

  const RoleValidation = (roleVal) => {
    const errors = {};
    if (!roleVal) {
      errors.roleVal = "Role is required";
    }
    return errors;
  };


  const getfranchise = () => {
    UserAPI.getfranchise({}).then((response) => {
      // console(response);
      setFranchise(response);
    });
  };


  const getRoleforAppoin = () => {
    UserAPI.getRoleforAppoin({}).then((response) => {
      // console.log(response);
      setRole(response)
    });
  };

  const userData = () => {
      let data = localStorage.getItem("data");
      let data2 = (JSON.parse(data));
      // console.log(data2.username);
      setUsername(data2.username);
  }


  const showDoctor = async () => {
    
    // e.preventDefault();
    // console.log('locVal...',locVal);
    // console.log('roleVal...',roleVal);
    // console.log("this is event",e);
    setIsSubmit(true);
    setfranchiseInputError(FranchiseValidation(locVal));
    setroleInputError(RoleValidation(roleVal));
    if (Object.keys(franchiseInputError).length === 0 && Object.keys(roleInputError).length === 0 && isSubmit) {
      const res = await UserAPI.showDoctorList({
        locVal: locVal,
        roleVal: roleVal
      }).then((response) => {
        // console.log(response);
        setresultasDoctor(response);
      });
      // console.log(res);
      setIsSubmit(false);
      setButtonAvail(false);
    }
    else {
      console.log("franchiseInputError");
      console.log("roleInputError");
    }
  };

  let Navigate = useNavigate();

  const Appoin = (value) => {
    Navigate(`/schedule?id=${value.id}`);
  }



  return (
    <>
      <Nav2 about="AboutUs" login="Login" logout="Logout" name={username} ></Nav2>
      {/* <Nav2 about="AboutUs" login="Login" logout="Logout" name={username} hello="Hello,"></Nav2> */}

      <div className='roww'>
        <div className='columnn franchise'>
          <label className='fname'>Franchise*</label>
          <div >
            <select className="Location" value={locVal} onChange={(e) => { setLocVal(e.target.value); }}>
              <option value="" selected disabled>-- Select franchise --</option>
              {
                franchise.map((value, key) => {
                  return (
                    <option value={value.id} key={key.toString()}>{value.franchise_name}</option>
                  );
                })
              }
            </select>
            {/* <Alert severity="error" className='errormsg'>{franchiseInputError.locVal}</Alert> */}
            <p className='errormsg'>{franchiseInputError.locVal}</p>
            {/* <p className='errormsg'>{error.locVal}</p> */}
          </div>
        </div>





        <div className='columnn role'>
          <label className='rname'>Role*</label>
          <div>
            <select className="Role1" onChange={(e) => { setRoleVal(e.target.value); }}>
              <option value="" selected disabled>-- Select Role --</option>
              {
                role.map((value, key) => {
                  return (
                    <option value={value.id} key={key.toString()}>{value.role_name}</option>
                  );
                })
              }
            </select>
            <p className='roleerr'>{roleInputError.roleVal}</p>
            {/* <p className='roleerr'>{error.roleVal}</p> */}
          </div>
        </div>

        <div className='columnn searchh'>
          <button type='button' className='btnn' onClick={showDoctor} > Search</button>

        </div>
      </div>

      <div>
        <table className='tablee'>
          <tr className='Tableheading'>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
          {
            resultasDoctor.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.id}</td>
                  <td>{value.username}</td>
                  <td>{value.phone}</td>
                  <td>{value.email}</td>
                  <td>
                    <button type='button' className="edit" id="appoin" disabled={buttonAvail} onClick={(e) => { Appoin(value) }}>Appoinment </button>
                  </td>
                </tr>
              );
            })
          }
        </table>
      </div>


    </>
  )
};

export default Appoinment;
