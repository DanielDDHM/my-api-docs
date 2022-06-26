import { Context } from '../../../context';
import {
  CreateHrAddressRequest,
  UpdateHrAddressRequest,
  DeleteHrAddressRequest,
} from '../types/addresses.typings';
import requestHR from '../hr.request.service';

export default {
  Mutation: {
    createHrAddress: async (_: any, { data }: CreateHrAddressRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee/address',
        data,
      });
    },
    updateHrAddress: async (_: any, { id, data }: UpdateHrAddressRequest, ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/employee/address/${id}`,
        data,
      });
    },
    deleteHrAddress: async (_: any, { id }: DeleteHrAddressRequest, ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/employee/address/${id}`,
      });
    },
  },
};