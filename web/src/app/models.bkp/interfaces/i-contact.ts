import { IBaseEntity } from './i-base.entity';
import { IBaseNamedEntity } from './i-base-named.entity';
import { IAddress } from './i-address';

export interface IContact extends IBaseNamedEntity {
  email: string;
  phone?: string;
  websiteUrl?: string;
  address?: string; //IAddress;
}
