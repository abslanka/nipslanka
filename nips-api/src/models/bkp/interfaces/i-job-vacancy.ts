import { IJobOrderVacancy } from './i-job-order-vacancy';
import { IBaseEntity, ICompany } from 'models/interfaces';

export interface IJobVacancy extends IBaseEntity {
  position: string;
  description: string;
  type: string; // full/part time
  location: string;

  skills?: string;
  experience?: string;
  qualifications?: string;
  education?: string;

  //jobOrders: IJobOrder[];
  jobOrderVacancies?: IJobOrderVacancy[];
  company: ICompany;
}
