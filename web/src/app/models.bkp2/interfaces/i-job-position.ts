import { IBaseNamedTypeEntity, IVacancy } from './';

export interface IJobPosition extends IBaseNamedTypeEntity {
  description?: string;

  skills?: string;
  experience?: string;
  qualifications?: string;

  vacancies?: IVacancy[];
}
