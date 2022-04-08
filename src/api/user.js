import APIService from './config/APIService';
import { UserAPI as api } from './config/APIRoutes';

// CALL APIService have 6 arguments
// payLoad, URL, {methodType: <GET/POST>}, {isLoading: <Boolean>}, cancelToken:<Boolean>, checkError: <Boolean>

export default {
    
  getfranchise: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getfranchise, methodType: 'GET' });
    return response;
  },

  getRole: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getRole, methodType: 'GET' });
    return response;
  },

  getRoleforAppoin: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getRoleforAppoin, methodType: 'GET' });
    return response;
  },
 
  login: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.login, methodType: 'POST' });
    return response;
  },

  AdminLogin: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.AdminLogin, methodType: 'POST' });
    return response;
  },

  getUser: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUser, methodType: 'GET' });
    return response;
  },

  registeruser: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.registeruser, methodType: 'POST' });
    return response;
  },

  registeruserprof: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.registeruserprof, methodType: 'POST' });
    return response;
  },

  getUserprf: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUserprf, methodType: 'GET' });
    return response;
  },

  showDoctorList: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.showDoctorList, methodType: 'POST' });
    return response;
  },

  getUserById: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUserById, methodType: 'POST' });
    return response;
  },
  
  setAvailablity: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.setAvailablity, methodType: 'POST' });
    return response;
  },

  getUserDataByID: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUserDataByID, methodType: 'POST' });
    return response;
  },

  appoinment_record: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.appoinment_record, methodType: 'POST' });
    return response;
  },

  appointed_client: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.appointed_client, methodType: 'POST' });
    return response;
  },

  getOldAppoinment: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getOldAppoinment, methodType: 'POST' });
    return response;
  },

  getMaxUserID: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getMaxUserID, methodType: 'GET' });
    return response;
  },

  filterData: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.filterData, methodType: 'POST' });
    return response;
  },

  getUserLeave: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUserLeave, methodType: 'POST' });
    return response;
  },

  getDoctorLeave: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getDoctorLeave, methodType: 'POST' });
    return response;
  },

  getUserPassord: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.getUserPassord, methodType: 'POST' });
    return response;
  },

  updateNewPassword: async ({ ...payload }) => {
    const response = await APIService({ payload, URL: api.updateNewPassword, methodType: 'POST' });
    return response;
  },
  
};
