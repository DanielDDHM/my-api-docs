import axios from 'axios';
import { BASE_URLS } from '../../constants/baseUrls.typings';
import { StatusCode } from '../../constants/statuscode.typings';

const apiCodelandService = axios.create({
  baseURL: (
    process.env.APP_ENV?.toLowerCase() === 'prod'
      ? BASE_URLS.CODELAND_SERVICE.PROD : (
        process.env.APP_ENV?.toLowerCase() === 'nonprod'
          ? BASE_URLS.CORE.DEV : BASE_URLS.CORE.TEST)
  ),
  validateStatus: (status: number) => status < StatusCode.INTERNAL_SERVER_ERROR,
});

console.log('CODELAND SERVICE STARTED AT:',
  apiCodelandService.defaults.baseURL)

export default apiCodelandService;
