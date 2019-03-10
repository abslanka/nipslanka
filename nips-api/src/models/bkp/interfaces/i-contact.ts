import { IBaseEntity } from '../../interfaces/base/i-base.entity';
import { IBaseNamedEntity } from '../../interfaces/base/i-base-named.entity';
import { IAddress } from './i-address';

export interface IContact extends IBaseNamedEntity {
  email: string;
  phone?: string;
  websiteUrl?: string;
  address?: string; //IAddress;
}
