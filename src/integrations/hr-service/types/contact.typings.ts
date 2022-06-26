export type Contact = {
  id: String
  label: String
  value: String
  createdAt: String
  updatedAt: String
  deleted: Boolean
  deletedAt: String
  employeeId: String
};

export type ContactDTO = Pick<Contact,
'label' | 'value' | 'employeeId'
>;

export interface CreateHrContactRequest {
  data: ContactDTO,
}

export interface UpdateHrContactRequest {
  data: ContactDTO,
  id: string,
}

export interface DeleteHrContactRequest {
  id: string,
}
