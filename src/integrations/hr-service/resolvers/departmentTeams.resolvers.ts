import { Context } from '../../../context';
import {
  CreateHrDepartmentTeamRequest, UpdateHrDepartmentTeamRequest, DeleteDepartmentTeamHrRequest,
  GetHrDepartmentTeamByIdRequest, IndexDepartmentTeamsRequest,
} from '../types/departmentTeams.typings';
import requestHR from '../hr.request.service';
import createQueryParams from '../../../helpers/createQueryParams';


export default {
  Mutation: {
    createHrDepartmentTeam: async (_: any, { data }: CreateHrDepartmentTeamRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/departmentTeam',
        data,
      });
    },
    deleteHrDepartmentTeam: async (_: any, { id }: DeleteDepartmentTeamHrRequest, ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/departmentTeam/${id}`,
      });
    },
    updateHrDepartmentTeam: async (_: any, { data, id }: UpdateHrDepartmentTeamRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/departmentTeam/${id}`,
        data,
      });
    },
  },
  Query: {
    getHrDepartmentTeamById: async (_: any, { id }: GetHrDepartmentTeamByIdRequest,
      ctx: Context) => {
      return await requestHR({
        method: 'GET',
        url: `/departmentTeam/${id}`,
      });
    },
    getAllHrDepartmentTeams: async (_: any, {
      data: {
        filters,
        page,
        perPage,
      },
    }: IndexDepartmentTeamsRequest, ctx: Context) => {
      const filtersUrl = createQueryParams(filters, 'filter');
      return await requestHR({
        method: 'GET',
        url: `/departmentTeam?${filtersUrl}page=${page}&perPage=${perPage}`,
      });
    },
  },
};
