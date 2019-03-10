import { IBaseNamedEntity, IBaseNamedTypeEntity } from '../../interfaces';

export interface IQualification extends IBaseNamedTypeEntity {
  desc?: string;
  completedInYear?: Date;
}
