export type Address = {
  id: string
  zipcode: string,
  streetName: string,
  number: string,
  neighborhood: string,
  state: string,
  country: string,
  reference: string,
  city: string,
  employeeId: string,
  createdAt: Date
  updatedAt: Date | null
  deleted: boolean | null
  deletedAt: Date | null
};

export type AddressDTO = Omit<Address,
'id' | 'createdAt' | 'updatedAt' | 'deleted' | 'deletedAt'
>;

export interface CreateHrAddressRequest {
  data: AddressDTO,
}

export interface UpdateHrAddressRequest {
  id: string,
  data: AddressDTO,
}

export interface DeleteHrAddressRequest {
  id: string,
}
