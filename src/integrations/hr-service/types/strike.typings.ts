export type Strike = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean | null;
  deletedAt: Date | null;
  employeeId: string;
};

export type StrikeDTO = Pick<Strike,
'title' | 'description' | 'employeeId'
>;

export interface CreateHrStrikeRequest {
  data: StrikeDTO,
}

export interface DeleteHrStrikeRequest {
  id: string,
}
