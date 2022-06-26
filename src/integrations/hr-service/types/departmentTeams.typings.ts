export type DepartmentTeam = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean | null;
  deletedAt: Date | null;
  departmentId: string;
};

export type DepartmentTeamDTO = Pick<DepartmentTeam,
'title' | 'description' | 'departmentId'
>;

export interface CreateHrDepartmentTeamRequest {
  data: DepartmentTeamDTO,
}

export interface IndexDepartmentTeamsRequest {
  data: {
    filters: GetAllDepartmentTeamsFilters,
    page?: number,
    perPage?: number,
  }
}

export interface GetAllDepartmentTeamsFilters {
  title?: string;
  description?: string;
  departmentId?: string;
}

export interface GetHrDepartmentTeamByIdRequest {
  id: string
}

export interface DeleteDepartmentTeamHrRequest {
  id: string
}

export interface UpdateHrDepartmentTeamRequest {
  data: DepartmentTeamDTO,
  id: string,
}
