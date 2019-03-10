import {
  IBaseEntity,
  ICompany,
  IJobProvider,
  IJobVacancy,
  IJobOrderVacancy,
} from '.';

export interface IJobOrder extends IBaseEntity {
  jobProvider: IJobProvider;
  company: ICompany;

  vacancies?: IJobOrderVacancy[]; //IJobVacancy[];
  noOfOpenings: number;
  closingDate: Date;
  status?: number; // 0-pending, 1-part-filled, 2-filled ,

  //remuneration: JobRemuneration,
  /* salary: number;
  bonus?: number;
  benefits?: string; */
}
