import { IBaseNamedEntity, IContact } from '.';

export interface ICompany extends IBaseNamedEntity {
  contactPerson: IContact;
  profileDesc?: string;
  //industryType?: string;
  websiteUrl?: string;
  //address?: string;
}
