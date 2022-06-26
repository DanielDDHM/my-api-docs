import { Context } from '../../../context';
import {
  CreateHrDepartmentRequest,
  GetDepartmentByIdRequest,
  IndexDepartmentsRequest,
  UpdateHrDepartmentRequest,
  DeleteDepartmentHrRequest,
} from '../types/departments.typings';
import requestHR from '../hr.request.service';
import createQueryParams from '../../../helpers/createQueryParams';


export default {
  Query: {
    indexHrDepartments: async (_: any, {
      data: {
        filters,
        page,
        perPage,
      },
    }: IndexDepartmentsRequest, ctx: Context) => {
      const filtersUrl = createQueryParams(filters, 'filter');

      return await requestHR({
        method: 'GET',
        url: `/department?${filtersUrl}page=${page}&perPage=${perPage}`,
      });
    },
    getHrDepartmentById: async (_: any, { id }: GetDepartmentByIdRequest, ctx: Context) => {
      return await requestHR({
        method: 'GET',
        url: `/department/${id}`,
      });
    },
  },
  Mutation: {
    createHrDepartment: async (_: any, { data }: CreateHrDepartmentRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/department',
        data,
      });
    },
    updateHrDepartment: async (_: any, { data, id }: UpdateHrDepartmentRequest, ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/department/${id}`,
        data,
      });
    },
    deleteHrDepartment: async (_: any, { id }: DeleteDepartmentHrRequest, ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/department/${id}`,
      });
    },
  },
};
