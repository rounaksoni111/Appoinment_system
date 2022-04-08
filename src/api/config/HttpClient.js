import axios from 'axios';
import { APP_TOKEN } from '../../lib/localStorage';



export default async function CheckError(error) {
  // The request was made and the server responded with a status code
  // that falls out of the range of 2xx
  if (axios.isCancel(error)) {
    console.log('axios request cancelled', error.message);
  } else if (error.response) {
    if (error.response.status === 500) {
      window.alert('internal server error');
    } else if (error.response.status === 404) {
      window.alert('Resource not found');
    } else if (error.response.status === 401) {
      window.alert('Operation Failed due to Unauthorized user. kindly login back');
      APP_TOKEN.remove('accessToken');
      // window.location.replace('/auth/login');
      window.location.replace('/adminlogin');
    }
  } else if (error.request) {
    console.log('error.request', error.request);
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
  } else if (error.response === undefined) {
    window.alert('Please check your internet connectivity!');
  } else {
    // Something happened in setting up the request that triggered an Error
    window.alert(error.message);
  }
}
