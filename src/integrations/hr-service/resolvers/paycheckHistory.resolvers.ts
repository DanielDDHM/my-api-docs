import { Context } from '../../../context';
import { CreateHrPaycheckHistoryRequest } from '../types/paycheckHistory.typings';
import requestHR from '../hr.request.service';


export default {
  Mutation: {
    createHrPaycheckHistory: async (_: any, { data }: CreateHrPaycheckHistoryRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: 'employee/paycheckHistory',
        data,
      });
    },
  },
};
