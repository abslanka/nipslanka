import { IJobOrder, IJobVacancy } from './';

export interface IJobOrderVacancy {
  jobOrder?: IJobOrder;
  vacancy?: IJobVacancy;
  noOfOpenings: number;
  status?: number; // 0-pending, 1-part-filled, 2-filled ,
  jobsOffered?: number;
  jobsAvailable?: number;

  //remuneration: JobRemuneration,
  salary: number;
  bonus?: number;
  benefits?: string;
}
