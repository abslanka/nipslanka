import { IBaseNamedEntity } from './i-base-named.entity';
import { IContact } from '.';

export interface ICompany extends IBaseNamedEntity {
  profileDesc?: string;
  industryType?: string;
  websiteUrl?: string;
  address?: string;
}
