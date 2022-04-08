const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getfranchise = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getfranchise();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}


const getRole = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getRole();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const getRoleforAppoin = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getRoleforAppoin();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}



const login = async (req, res, next) => {
  try {
    const params = {
      email: req.body.email,
      password: req.body.password,
    }
    //  console.log('params', params);
    const UserModel = new User(params);
    const result = await UserModel.login();
    // res.send(result);
    const accessToken = jwt.sign(result, 'A1ABILITIES-JWT-SECRET', { expiresIn: '24h', issuer: 'https://a1abilities.com.au'});

    if (result.length > 0) { // resut me ddata aata h arauy me
      if (params.password == result[0].password) { /// yha se user dtiial leni h
        // res.send("You are logged in!.");
        // res.send({ loggedIn: true, email: params.email , message : "you are logged in"});
        res.send({ loggedIn: true, data: { accessToken: `Bearer ${accessToken}`, result }, email: params.email, result });
        // res.send(result);
      } else {
        res.send({ loggedIn: false, message: "wrong email password combo!.." });
        // res.send("wrong email password combo!..");
      }
    } else {
      res.send({ loggedIn: false, message: "user doesnt exist!.." });
      // res.send("user doesnt exist");
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
}

const Ad_login = async (req, res, next) => {
  try {
    const params = {
      AdminEmail: req.body.AdminEmail,
      ad_Password: req.body.ad_Password,
    }
    //  console.log('params', params);
    const UserModel = new User(params);
    const result = await UserModel.Ad_login();
    if (result.length > 0) {
      
      res.send({ loggedIn: true, message: "You are Loggedin!.." });
    } else {
      res.send({ loggedIn: false, message: "user doesnt exist!.." });
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
}

const AdminLogin = async (req, res, next) => {
  try {
    const params = {
      email: req.body.email,
      password: req.body.password,
    }
    //  console.log('params', params);
    const UserModel = new User(params);
    const { user } = await UserModel.AdminLogin();
    // console.log(user);
    if (user) { 
      const accessToken = jwt.sign({...user}, 'A1ABILITIES-JWT-SECRET', { expiresIn: '24h', issuer: 'https://a1abilities.com.au'});
      // console.log(accessToken);
      // res.send({ loggedIn: true, email: params.email, result });
        // res.send({ isSuccess: true, data: {}, message: 'user reigster', statusCode: 501 });
        // res.cookie("jwt", accessToken, {
        //   expires: new Date(Date.now() + 50000),
        //   httpOnly:true 
        // });
        res.send({ loggedIn: true, data: { accessToken: `Bearer ${accessToken}`, user: user }});
      
    } else {
      res.send({ loggedIn: false, message: "user doesnt exist!.." });
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
}




const showDoctorList = async (req, res, next) => {
  try {
    const params = {
      locVal: req.body.locVal,
      roleVal: req.body.roleVal,
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.showDoctorList();
    
    res.send(ress);
  } catch (err) {
    next(err);
  }
}



const getUser = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getUser();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}


const registeruser = async (req, res, next) => {
  try {
    const params = {
      username: req.body.username,
      role_id: req.body.role_id,
      email: req.body.email,
      password: req.body.password,
      franchise_id: req.body.franchise_id,
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.registeruser();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const registeruserprof = async (req, res, next) => {
  try {
    const params = {
      userid: req.body.userid,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.registeruserprof();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const getUserprf = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getUserprf();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

// const showDoctorList = async (req, res, next) => {
//   try {
//     const params = {
//       locVal: req.body.locVal,
//       roleVal: req.body.roleVal,
//     }
//     console.log(params);
//     const UserModel = new User(params);
//     const ress = await UserModel.showDoctorList();
//     res.send(ress);
//   } catch (err) {
//     next(err);
//   }
// }

const getUserById = async (req, res, next) => {
  try {
    const params = {
      user_id: req.body.user_id
    }
    // console.log(params);

    const UserModel = new User(params);    
    const ress = await UserModel.getUserById();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

// const schedule = async (req, res, next) => {
//   try {
//     const params = {
//       username: req.body.username,
//       apoin_with: req.body.apoin_with,
//       date: req.body.date,
//       time: req.body.time,
//       reference: req.body.reference
//     }
//     // console.log(params);
//     const UserModel = new User(params);
//     const ress = await UserModel.schedule();
//     res.send(ress);
//   } catch (err) {
//     next(err);
//   }
// }

const getUserDataByID = async (req, res, next) => {
  try {
    const params = {
      user_id: req.body.user_id,
      minDate: req.body.minDate,
      maxDate: req.body.maxDate
    }
    // console.log(params);

    const UserModel = new User(params);    
    const ress = await UserModel.getUserDataByID();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const filterData = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id,
      minDate: req.body.minDate,
      maxDate: req.body.maxDate
    }
    // console.log(params);

    const UserModel = new User(params);    
    const ress = await UserModel.filterData();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}


const appoinment_record = async (req, res, next) => {
  try {
    const params = {
      franchise_id: req.body.franchise_id,
      user_id: req.body.user_id,
      date: req.body.date,
      time: req.body.time,
      time_period : req.body.time_period
    }
    // console.log("record",params);
    const UserModel = new User(params);
    const ress = await UserModel.appoinment_record();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const appointed_client = async (req, res, next) => {
  try {
    const params = {
      franchise_id: req.body.franchise_id,
      user_id: req.body.user_id,
      name: req.body.name,
      contact: req.body.contact,
      reference: req.body.reference
    }
    // console.log("client",params);
    const UserModel = new User(params);
    const ress = await UserModel.appointed_client();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const getOldAppoinment = async (req, res, next) => {
  try {
    const params = {
      user_id: req.body.user_id,
      date: req.body.date
    }
    // console.log('getOldAppoinment', params);

    const UserModel = new User(params);    
    const ress = await UserModel.getOldAppoinment();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const getMaxUserID = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getMaxUserID();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const setAvailablity = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id,
      user_id: req.body.user_id,
      date: req.body.date,
      is_available: req.body.is_available,
      time: req.body.time,
      time_period : req.body.time_period  
    }
    // console.log("client",params);
    const UserModel = new User(params);
    const ress = await UserModel.setAvailablity();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const getUserLeave = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id
    }
    // console.log(" getUserLeave idd",params);
    const UserModel = new User(params);
    const ress = await UserModel.getUserLeave();
    res.send(ress);
    // console.log(ress);
  } catch (err) {
    next(err);
  }
}


const getDoctorLeave = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id,
      date: req.body.date
    }
    // console.log("idd",params);
    const UserModel = new User(params);
    const ress = await UserModel.getDoctorLeave();
    res.send(ress);
    // console.log(ress);
  } catch (err) {
    next(err);
  }
}

const getUserPassord = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id
    }
    // console.log(params);

    const UserModel = new User(params);    
    const ress = await UserModel.getUserPassord();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const updateNewPassword = async (req, res, next) => {
  try {
    const params = {
      id: req.body.id,
      reEnterPassword : req.body.reEnterPassword
    }
    // console.log(params);

    const UserModel = new User(params);    
    const ress = await UserModel.updateNewPassword();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}





module.exports = {
  getfranchise,
  getRole,
  login,
  Ad_login,
  getUser,
  registeruser,
  registeruserprof,
  getUserprf,
  showDoctorList,
  getUserById,
  // schedule,
  getUserDataByID,
  appoinment_record,
  appointed_client,
  getOldAppoinment,
  getMaxUserID,
  AdminLogin,
  filterData,
  setAvailablity,
  getUserLeave,
  getDoctorLeave,
  getRoleforAppoin,
  getUserPassord,
  updateNewPassword
}