import { Context } from '../../../context';
import {
  CreateHrDocumentRequest,
  UpdateHrDocumentRequest,
  DeleteHrDocumentRequest,
} from '../types/documents.typings';
import requestHR from '../hr.request.service';

export default {
  Mutation: {
    createHrDocument: async (_: any, { data }: CreateHrDocumentRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee/document',
        data,
      });
    },
    updateHrDocument: async (_: any, { data, id }: UpdateHrDocumentRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/employee/document/${id}`,
        data,
      });
    },
    deleteHrDocument: async (_: any, { id }: DeleteHrDocumentRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `employee/document/${id}`,
      });
    },
  },
};
