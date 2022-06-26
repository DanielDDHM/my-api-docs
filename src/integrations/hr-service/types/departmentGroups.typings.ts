export type DepartmentGroup = {
  id: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date | null
  deleted: boolean | null
  deletedAt: Date | null
  teamId: string
};

export type DepartmentGroupDTO = Pick<DepartmentGroup,
'title' | 'description' | 'teamId'
>;

export interface CreateHrDepartmentGroupRequest {
  data: DepartmentGroupDTO,
}

export interface GetHrDepartmentGroupByIdRequest {
  id: string,
}
export interface DeleteDepartmentGroupHrRequest {
  id: string,
}
export interface UpdateHrDepartmentGroupRequest {
  data: DepartmentGroupDTO,
  id: string,
}
export interface GetAllDepartmentGroupFilters {
  title?: string;
  description?: string;
}
export interface IndexDepartmentGroupRequest {
  data: {
    filters: GetAllDepartmentGroupFilters,
    page?: number,
    perPage?: number,
  }
}
