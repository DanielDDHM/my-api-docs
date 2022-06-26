export type PaycheckHistory = {
  id: string;
  title: string;
  value: string;
  walletAddress: string;
  createdAt: Date;
  updatedAt: Date | null;
  deleted: boolean | null;
  deletedAt: Date | null;
  employeeId: string;
};

export type PaycheckHistoryDTO = Pick<PaycheckHistory,
'title' | 'value' | 'walletAddress' | 'employeeId'
>;

export interface CreateHrPaycheckHistoryRequest {
  data: PaycheckHistoryDTO,
}
