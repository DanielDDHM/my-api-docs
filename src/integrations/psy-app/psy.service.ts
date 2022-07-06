import axios from 'axios';
import { BASE_URLS } from '../../constants/baseUrls.typings';
import { StatusCode } from '../../constants/statuscode.typings';

const apiPsyService = axios.create({
  baseURL: (
    process.env.NODE_ENV?.toLowerCase() === 'prod'
      ? BASE_URLS.BET_SERVICE.PROD : (
        process.env.NODE_ENV?.toLowerCase() === 'nonprod'
          ? BASE_URLS.CORE.DEV : BASE_URLS.CORE.TEST)
  ),
  validateStatus: (status: number) => status < StatusCode.INTERNAL_SERVER_ERROR,
});

console.log('BET SERVICE STARTED AT:',
  apiPsyService.defaults.baseURL)

export default apiPsyService;
