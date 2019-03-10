import { IBaseNamedEntity } from './i-base-named.entity';
import { IContact, ICompany } from '.';

export interface IJobProvider extends IBaseNamedEntity {
  providerType: string;
  company?: ICompany[];
  //contact: IContact[];
  email: string;
  phone?: string;
  address?: string; //IAddress;
}
