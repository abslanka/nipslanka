import { IBaseNamedEntity, IContact } from '.';
import { IImageFile } from './i-image-file';

export interface ICompany extends IBaseNamedEntity {
  contactPerson: IContact;
  profileDesc?: string;
  //industryType?: string;
  websiteUrl?: string;
  //address?: string;

  //logoUrl?: string;

  logoImage: IImageFile;
}
