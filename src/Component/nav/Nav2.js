import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Nav2 = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
    console.log("loggedIn");
  }, [localStorage.getItem("loggedIn")]);

  const logout = () => {
    localStorage.setItem("data", null);
    localStorage.setItem("accessToken", null);
    localStorage.setItem("loggedIn", "false")
  }
  var browserHistory = browserHistory;
  return (
    <>
      <div className="Navbar">
        <div className='rooow'>
          <div className='Coool'>
            <div className='dataInfo'>
              {/* <img src={imgr} alt="notfound" height={60} width={55} className='userimg' /> */}

              {loggedIn == "true" ? (
                <>
                  <label className='hello' > {props.hello} </label>
                  <label className='username'> {props.name} </label>
                </>
              ) : (
                <>
                  <label className='username'> {props.Name} </label>
                </>
              )}
            </div>
          </div>
          <div className='Coool linkkk'>
            <a href='/manageAppoinment'>{props.manage}</a>
            <a onClick={() => navigate(-1)} style={{color:"white"}}>{props.goback}</a>
            <a href='/'>{props.back}</a>
            <a href="/AdminPannel">{props.home}</a>
            <a href='/admin'>{props.MemberList}</a>
            <a href="/about">{props.about}</a>
            <a href="/cp">{props.password}</a>
            {loggedIn == "true" ? (
              <>
                <a href='/' onClick={logout}>{props.logout}</a>
    
              </>
            ) : (
              <>
                <a href='/adminlogin'>{props.login}</a>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Nav2