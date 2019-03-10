import { ICompany } from "../interfaces"
import { ContactDto } from "./contact.dto"
import { IsOptional } from "class-validator"
import { Type } from "class-transformer"

export class CompanyDto implements ICompany {
  @IsOptional()
  id: number

  @IsOptional()
  name: string

  @IsOptional()
  profileDesc?: string

  @IsOptional()
  websiteUrl?: string

  @IsOptional()
  @Type(() => ContactDto)
  contactPerson: ContactDto
}
