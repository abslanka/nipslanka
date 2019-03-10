import { IBaseNamedTypeEntity } from './i-base-named-type.entity';

export interface ICountry extends IBaseNamedTypeEntity {
  phoneCode: number;
}
