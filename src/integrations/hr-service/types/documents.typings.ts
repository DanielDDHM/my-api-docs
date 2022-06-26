export type Documents = {
  id: string
  label: string
  value: string
  createdAt: Date
  updatedAt: Date
  deleted: boolean
  deletedAt: Date
  employeeId: string
};

export type DocumentDTO = Pick<Documents,
'label' | 'value' | 'employeeId'
>;

export interface CreateHrDocumentRequest {
  data: DocumentDTO,
}

export interface UpdateHrDocumentRequest {
  data: DocumentDTO,
  id: string,
}

export interface DeleteHrDocumentRequest {
  id: string,
}
