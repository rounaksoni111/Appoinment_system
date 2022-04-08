import React, {useState, useEffect} from 'react';
import Nav2 from '../nav/Nav2';
import { API_URL } from '../../api/config/URLs';
import pic from "../../img/12.png";

const AdminPannel = () => {
    const [adminName, setAdminName] = useState("");
    // const [role, setRole] = useState("");

    useEffect(() => {
        userData();
      }, []);
    
    const userData = () => {
    let data = localStorage.getItem("data");
    let data2 = (JSON.parse(data));
      setAdminName(data2.username);
      // setRole(data2.role_id);
  }



  return (
    <>
        <Nav2 logout="LogOut" name={adminName}  hello="Hello," MemberList="MemberList" password="ChangePassword" />
        {/* <img src={`${API_URL}/api/get-file?path=img/12.png`} height="640px" width="1400px" style={{ marginLeft : "70px"}}/> */}
        <img src={pic} height="640px" width="1400px" style={{ marginLeft : "70px"}}/>
    </>
  )
}

export default AdminPannel