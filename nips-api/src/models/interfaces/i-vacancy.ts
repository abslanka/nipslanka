import { IJobOrder, IBaseEntity, IJobPosition, IStatusType } from './';

export interface IVacancy extends IBaseEntity {
  noOfOpenings: number;
  status?: IStatusType; //
  jobsOffered?: number;
  jobsAvailable?: number;

  //remuneration:
  salary: number;
  benefits?: string;
  location?: string;

  jobOrder?: IJobOrder;
  jobPosition?: IJobPosition;
}
