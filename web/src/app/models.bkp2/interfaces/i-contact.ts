import { IBaseNamedEntity, IContact } from '.';

export interface IContact extends IBaseNamedEntity {
  //providerType?: string;
  //company?: ICompany[];
  //contact: IContact[];
  email: string;
  phone?: string;
  //address?: string; //IAddress;
}
