import { Context } from '../../../context';
import {
  CreateHrEmployeeRequest, DeleteHrEmployeeRequest, UpdateHrEmployeeRequest,
  GetEmployeeByIdRequest, IndexEmployeesRequest,
} from '../types/employee.typings';
import requestHR from '../hr.request.service';
import createQueryParams from '../../../helpers/createQueryParams';


export default {
  Query: {
    indexHrEmployees: async (_: any, {
      data: {
        filters,
        page,
        perPage,
      },
    }: IndexEmployeesRequest, ctx: Context) => {
      const filtersUrl = createQueryParams(filters, 'filter');

      return await requestHR({
        method: 'GET',
        url: `/employee?${filtersUrl}page=${page}&perPage=${perPage}`,
      });
    },
    getHrEmployeeById: async (_: any, { id }: GetEmployeeByIdRequest, ctx: Context) => {
      return await requestHR({
        method: 'GET',
        url: `/employee/${id}`,
      });
    },
  },
  Mutation: {
    createHrEmployee: async (_: any, { data }: CreateHrEmployeeRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee',
        data,
      });
    },
    updateHrEmployee: async (_: any, { id, data }: UpdateHrEmployeeRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/employee/${id}`,
        data,
      });
    },
    deleteHrEmployee: async (_: any, { id }: DeleteHrEmployeeRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/employee/${id}`,
      });
    },
  },
};
