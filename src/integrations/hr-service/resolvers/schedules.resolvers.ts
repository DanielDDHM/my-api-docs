import { Context } from '../../../context';
import {
  CreateHrScheduleRequest,
  DeleteHrScheduleRequest,
  UpdateHrScheduleRequest,
} from '../types/schedules.typings';
import requestHR from '../hr.request.service';


export default {
  Mutation: {
    createHrSchedule: async (_: any, { data }: CreateHrScheduleRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee/schedule',
        data,
      });
    },
    updateHrSchedule: async (_: any, { data, id }: UpdateHrScheduleRequest, ctx: Context) => {
      return await requestHR({
        method: 'PUT',
        url: `/employee/schedule/${id}`,
        data,
      });
    },
    deleteHrSchedule: async (_: any, { id }: DeleteHrScheduleRequest, ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/employee/schedule/${id}`,

      });
    },
  },
};
