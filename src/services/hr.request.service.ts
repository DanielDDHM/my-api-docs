import { AxiosRequestConfig } from 'axios';
import hrService from '../integrations/hr-service/hr.service';

const requestHR = async (config: AxiosRequestConfig) => {
  try {
    const resp = await hrService(config);

    return {
      status: resp?.status,
      data: resp?.data?.data?.data ? resp?.data?.data?.data : resp?.data?.data,
      totalPages: resp?.data?.data?.totalPages,
      total: resp?.data?.data?.total,
      messages: resp?.data?.messages,
      isValid: resp?.data?.isValid,
    };
  } catch (e: any) {
    console.error(`
      ----------------------------------------------------
      🚨 EXCEPTION ALERT 🚨
      An exception ocurred while trying to request Human Resources MS.
      Route: ${hrService.defaults.baseURL}${config.url}
      Exception: ${e}
      ----------------------------------------------------
    `);
    if (e.isAxiosError) {
      return {
        status: e.response?.status,
        data: e.response?.data?.data,
        messages: e.response?.data?.messages,
        isValid: e.response?.data?.isValid,
      };
    }
    throw new Error(e.message);
  }
};

export default requestHR;
