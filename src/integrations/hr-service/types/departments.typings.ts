export type Department = {
  id: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date | null
  deleted: boolean | null
  deletedAt: Date | null
};

export type DepartmentDTO = Pick<Department,
'title' | 'description'
>;

export interface CreateHrDepartmentRequest {
  data: DepartmentDTO,
}

export interface UpdateHrDepartmentRequest {
  data: DepartmentDTO,
  id: string
}
export interface GetAllDepartmentsFilters {
  title?: string;
  description?: string;
}

export interface IndexDepartmentsRequest {
  data: {
    filters: GetAllDepartmentsFilters,
    page?: number,
    perPage?: number,
  }
}

export interface GetDepartmentByIdRequest {
  id: string,
}

export interface DeleteDepartmentHrRequest {
  id: string,
}
