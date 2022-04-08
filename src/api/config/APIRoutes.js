import { API_CONSUMER } from './URLs';

const User = `${API_CONSUMER}/api/v1/user`;

const UserAPI = {
  getfranchise: `${User}/getfranchise`,
  getRoleforAppoin: `${User}/getRoleforAppoin`,
  getRole: `${User}/getRole`,
  login: `${User}/login`,
  Ad_login: `${User}/Ad_login`,
  getUser: `${User}/getUser`,
  registeruser: `${User}/registeruser`,
  registeruserprof: `${User}/registeruserprof`,
  getUserprf: `${User}/getUserprf`,
  showDoctorList: `${User}/showDoctorList`,
  getUserById: `${User}/getUserById`,
  setAvailablity: `${User}/setAvailablity`,
  getUserDataByID: `${User}/getUserDataByID`,
  appoinment_record: `${User}/appoinment_record`,
  appointed_client: `${User}/appointed_client`,
  getOldAppoinment: `${User}/getOldAppoinment`,
  getMaxUserID: `${User}/getMaxUserID`,
  AdminLogin: `${User}/AdminLogin`,
  filterData: `${User}/filterData`,
  getUserLeave: `${User}/getUserLeave`,
  getDoctorLeave: `${User}/getDoctorLeave`,
  getUserPassord: `${User}/getUserPassord`,
  updateNewPassword: `${User}/updateNewPassword`,
};

export {
  UserAPI
};
