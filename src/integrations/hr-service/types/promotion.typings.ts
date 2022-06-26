export type Promotion = {
  id: string;
  title: string
  description: string
  currentSalary: string
  newSalary: string
  allowedBy: string
  employeeId: string
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean | null;
  deletedAt: Date | null;
};

export type PromotionDTO = Pick<Promotion,
'title' | 'description' | 'currentSalary' | 'newSalary' | 'allowedBy' | 'employeeId'
>;

export interface CreateHrPromotionRequest {
  data: PromotionDTO,
}

export interface DeleteHrPromotionRequest {
  id: String,
}
