import { ICompany } from "../interfaces"

export class CompanyDto implements ICompany {
  profileDesc?: string
  industryType?: string
  websiteUrl?: string
  address?: string
  name: string
  id: number
}
