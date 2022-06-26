import axios from 'axios';
import { BASE_URLS } from '../../constants/baseUrls.typings';
import { StatusCode } from '../../constants/statuscode.typings';

const apiHrService = axios.create({
  baseURL: (
    process.env.NODE_ENV?.toLowerCase() === 'prod'
      ? BASE_URLS.HR_SERVICE.PROD : (
        process.env.NODE_ENV?.toLowerCase() === 'nonprod'
          ? BASE_URLS.CORE.DEV : BASE_URLS.CORE.TEST)
  ),
  validateStatus: (status: number) => status < StatusCode.INTERNAL_SERVER_ERROR,
});

console.log('HR SERVICE STARTED AT:',
  apiHrService.defaults.baseURL)

export default apiHrService;
