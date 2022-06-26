import { Context } from '../../../context';
import {
  CreateHrDepartmentGroupRequest,
  GetHrDepartmentGroupByIdRequest,
  DeleteDepartmentGroupHrRequest,
  UpdateHrDepartmentGroupRequest,
  IndexDepartmentGroupRequest,
} from '../types/departmentGroups.typings';
import requestHR from '../hr.request.service';
import createQueryParams from '../../../helpers/createQueryParams';


export default {
  Mutation: {
    createHrDepartmentGroup: async (_: any, { data }: CreateHrDepartmentGroupRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/departmentGroup',
        data,
      });
    },
    deleteHrDepartmentGroup: async (_: any, { id }: DeleteDepartmentGroupHrRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/departmentGroup/${id}`,
      });
    },
    updateHrDepartmentGroup: async (_: any, { data, id }: UpdateHrDepartmentGroupRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/departmentGroup/${id}`,
        data,
      });
    },
  },
  Query: {
    getHrDepartmentGroupById: async (_: any, { id }: GetHrDepartmentGroupByIdRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'GET',
        url: `/departmentGroup/${id}`,
      });
    },
    getAllHrDepartmentGroup: async (_: any, {
      data: {
        filters,
        page,
        perPage,
      },
    }: IndexDepartmentGroupRequest, ctx: Context) => {
      const filtersUrl = createQueryParams(filters, 'filter');
      return await requestHR({
        method: 'GET',
        url: `/departmentGroup?${filtersUrl}page=${page}&perPage=${perPage}`,
      });
    },
  },
};
