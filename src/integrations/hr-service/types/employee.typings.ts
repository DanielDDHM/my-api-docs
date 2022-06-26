export type Employee = {
  id: string,
  fullName: string,
  birthDate: string,
  admittedAt: string,
  dismissedAt?: string,
  capU?: string,
  role: string,
  mainWalletAddress?: string,
  createdAt: Date
  updatedAt: Date | null
  deleted: boolean | null
  deletedAt: Date | null
  groupId: string,
};

export type EmployeeDTO = Omit<Employee,
'id' |
'createdAt' |
'updatedAt' |
'deleted' |
'deletedAt' |
'dismissedAt'
>;

export type UpdateEmployeeDTO = Omit<Employee,
'id' |
'createdAt' |
'updatedAt' |
'deleted' |
'deletedAt'
>;

export interface CreateHrEmployeeRequest {
  data: EmployeeDTO,
}
export interface UpdateHrEmployeeRequest {
  data: UpdateEmployeeDTO,
  id: string
}

export interface DeleteHrEmployeeRequest {
  id: string
}

export interface GetEmployeeByIdRequest {
  id: string
}

export interface GetAllEmployeesFilters {
  fullName?: string;
  birthDate?: string;
  admittedAt?: string;
  dismissedAt?: string;
  role?: string;
  deleted?: boolean;
  groupId?: { FK: string };
}

export interface IndexEmployeesRequest {
  data: {
    filters: GetAllEmployeesFilters,
    page?: number,
    perPage?: number,
  }
}
