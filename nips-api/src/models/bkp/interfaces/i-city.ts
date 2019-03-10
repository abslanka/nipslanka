import { IBaseNamedTypeEntity } from '../../interfaces/base/i-base-named-type.entity';
import { ICountry } from './i-country';

export interface ICity extends IBaseNamedTypeEntity {
  country: ICountry;
}
