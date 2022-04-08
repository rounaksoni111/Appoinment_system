import axios from 'axios';
import checkError from './HttpClient';
import { authHeader } from './AuthHeader';

const APIService = async ({ payload, URL, methodType = 'GET', cancelPreRequest = false }) => {
  try {
    const options = {
      url: URL,
      data: payload,
      method: methodType,
      headers: authHeader()
    };

    // let source;
    // if (cancelPreRequest) {
    //   // Save the cancel token for the current request
    //   source = axios.CancelToken.source();
    //   options.cancelToken = source.token;
    // }

    // // Check if there are any previous pending requests
    // if (source && (typeof source !== typeof undefined)) {
    //   source.cancel('Operation canceled due to new request.');
    //   // save the new request for cancellation
    //   source = axios.CancelToken.source();
    // }

    const { CancelToken } = axios;
    let cancel;
    if (cancelPreRequest) {
      options.cancelToken = new CancelToken((c) => {
        // An executor function receives a cancel function as a parameter
        cancel = c;
      });
    }

    // console.log(options);
    const result = await axios(options);

    // this cancel the request
    if (typeof cancel === 'function') {
      cancel('Operation canceled due to new request.');
    }
    return result.data;
  } catch (error) {
    // console.log('api service', error);
    checkError(error);
    // throw error;
  }
};

export default APIService;
