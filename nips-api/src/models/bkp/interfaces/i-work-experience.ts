import { IBaseNamedTypeEntity } from 'models/interfaces';

export interface IWorkExperience extends IBaseNamedTypeEntity {
  desc?: string;
  periodFrom?: Date;
  periodTo?: Date;
}
