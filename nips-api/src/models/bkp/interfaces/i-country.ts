import { IBaseNamedTypeEntity } from '../../interfaces/base/i-base-named-type.entity';

export interface ICountry extends IBaseNamedTypeEntity {
  phoneCode: number;
}
