import React from 'react';
import "./nav.css"
// import imgr from "../../img/userimg.png";

const Navbar = (props) => {
    return (
        <>
            {/* <div className="Navbar">
                <div className='userinfo'> */}
            {/* <img src={imgr} alt="notfound" height={60} width={55} className='userimg' /> */}
            {/* <label className='hello'>Hello, </label> */}
            {/* <label className='username'>{props.name} </label> */}
            {/* </div>
                <a href="/">Appoinment</a>
                <a href="/about">About Us</a> */}
            {/* <a href="/login"> Login </a> */}
            {/* </div> */}

            <div className="Navbar">
                <div className='rooow'>
                    <div className='Coool'>
                        <div className='dataInfo'>
                            {/* <img src={imgr} alt="notfound" height={60} width={55} className='userimg' /> */}
                            {/* <label className='hello'>Hello </label>
                            <label className='username'> {props.name} </label> */}
                        </div>
                    </div>
                    <div className='Coool linkkk'>
                        {/* <a href='/'> {props.home} </a> */}
                        {/* <a href='/about'> AboutUs </a> */}
                        
                        <a href='/'> Go Back</a>
                        {/* <a href='/login'> S-LOGIN </a> */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
