import { Context } from '../../../context';
import { CreateHrStrikeRequest, DeleteHrStrikeRequest } from '../types/strike.typings';
import requestHR from '../hr.request.service';


export default {
  Mutation: {
    createHrStrike: async (_: any, { data }: CreateHrStrikeRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: 'employee/strike',
        data,
      });
    },
    deleteHrStrike: async (_: any, { id }: DeleteHrStrikeRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `employee/strike/${id}`,
      });
    },
  },
};