import { Context } from '../../../context';
import {
  CreateHrPromotionRequest,
  DeleteHrPromotionRequest,
} from '../types/promotion.typings';
import requestHR from '../hr.request.service';


export default {
  Mutation: {
    createHrPromotion: async (_: any, { data }: CreateHrPromotionRequest, ctx: Context) => {
      return await requestHR({
        method: 'POST',
        url: '/employee/promotion',
        data,
      });
    },
    deleteHrPromotion: async (_: any, { id }: DeleteHrPromotionRequest, ctx: Context) => {
      return await requestHR({
        method: 'DELETE',
        url: `/employee/promotion/${id}`,
      });
    },
  },
};
