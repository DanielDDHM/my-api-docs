import { Context } from '../../../context';
import {
  CreateHrContactRequest,
  UpdateHrContactRequest,
  DeleteHrContactRequest,
} from '../types/contact.typings';
import requestHR from '../hr.request.service';
export default {
  Mutation: {
    createHrContact: async (_: any, { data }: CreateHrContactRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee/contact',
        data,
      });
    },
    updateHrContact: async (_: any, { data, id }: UpdateHrContactRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/employee/contact/${id}`,
        data,
      });
    },

    deleteHrContact: async (_: any, { id }: DeleteHrContactRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `employee/contact/${id}`,
      });
    },
  },
};
