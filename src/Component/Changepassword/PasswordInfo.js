import React from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
const PasswordInfo = () => {
  return (
    <>
        <div className='cooool'>
            <h3 style={{ marginTop: "10px" }}>Change Your Password</h3>
                <div className='note'>
                                                <CheckRoundedIcon /> Each password must have at least eight characters.<br />
                                                <CheckRoundedIcon /> Each password must contain at least three of the following four elements among its first eight characters:
                                                <div className='note2'>
                                                    <ThumbUpAltRoundedIcon /> uppercase letters (English, A through Z)    <br />
                                                    <ThumbUpAltRoundedIcon /> lowercase letters (English, a through z)<br />
                                                    <ThumbUpAltRoundedIcon /> special characters (for example, !, $, #, %)<br />
                                                    <ThumbUpAltRoundedIcon /> digits (0 through 9)<br />
                                                </div>
                                                <CheckRoundedIcon /> Do not use a space in a password. <br />
                                                <CheckRoundedIcon /> New passwords should differ from the old Password.
                                            </div>
                                        </div> 
    </>
  )
}

export default PasswordInfo