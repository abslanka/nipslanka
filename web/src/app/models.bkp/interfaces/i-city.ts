import { IBaseNamedTypeEntity } from './i-base-named-type.entity';
import { ICountry } from './i-country';

export interface ICity extends IBaseNamedTypeEntity {
  country: ICountry;
}
