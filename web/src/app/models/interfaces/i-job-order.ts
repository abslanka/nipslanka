import { IBaseEntity, ICompany, IVacancy, IStatusType } from '.';

export interface IJobOrder extends IBaseEntity {
  closingDate: Date;
  status?: IStatusType; //
  standardEmploymentContract?: string; // e.g. provision of housing accommodation, food, Residence permit( optional), overtime/holiday/rest day rate/payment

  company: ICompany;
  vacancies?: IVacancy[];
}
