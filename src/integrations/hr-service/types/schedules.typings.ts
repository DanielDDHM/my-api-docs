export type Schedule = {
  id: string
  day: string,
  start: string,
  end: string,
  employeeId: string,
  createdAt: Date
  updatedAt: Date | null
  deleted: boolean | null
  deletedAt: Date | null
};

export type ScheduleDTO = Pick<Schedule,
'day' | 'start' | 'end' | 'employeeId'
>;

export interface CreateHrScheduleRequest {
  data: ScheduleDTO,
}

export interface DeleteHrScheduleRequest {
  id: string
}

export interface UpdateHrScheduleRequest {
  data: ScheduleDTO,
  id: string
}
