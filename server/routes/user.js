const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user');

const validateToken = require('../utils/validateToken');
// router.post('/register', validateToken, Controller.registerUser);


router.get('/getfranchise',  Controller.getfranchise);
router.get('/getRole',Controller.getRole);
router.get('/getRoleforAppoin',Controller.getRoleforAppoin);
router.post('/login', Controller.login);
router.post('/Ad_login', Controller.Ad_login);
router.get('/getUser', validateToken, Controller.getUser);
router.post('/registeruser', validateToken, Controller.registeruser);
router.post('/registeruserprof', validateToken,  Controller.registeruserprof);
router.get('/getUserprf', Controller.getUserprf);
router.post('/showDoctorList', Controller.showDoctorList);
router.post('/getUserById',Controller.getUserById);
router.post('/getUserDataByID',Controller.getUserDataByID);
router.post('/appoinment_record',Controller.appoinment_record);
router.post('/appointed_client',Controller.appointed_client);
router.post('/getOldAppoinment',Controller.getOldAppoinment);
router.get('/getMaxUserID',Controller.getMaxUserID);
router.post('/AdminLogin', Controller.AdminLogin);
router.post('/filterData',Controller.filterData);
router.post('/setAvailablity',Controller.setAvailablity);
router.post('/getUserLeave',Controller.getUserLeave);
router.post('/getDoctorLeave',Controller.getDoctorLeave);
router.post('/getUserPassord',Controller.getUserPassord);
router.post('/updateNewPassword',Controller.updateNewPassword);


module.exports = router;