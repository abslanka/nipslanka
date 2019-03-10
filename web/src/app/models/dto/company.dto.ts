import { ICompany } from "../interfaces"
import { ContactDto, ImageFileDto } from "."
import { IsOptional } from "class-validator"
import { Type } from "class-transformer"

export class CompanyDto implements ICompany {
  @IsOptional()
  id: number

  @IsOptional()
  createdAt: Date

  @IsOptional()
  name: string

  @IsOptional()
  profileDesc?: string

  @IsOptional()
  websiteUrl?: string

  //@IsOptional()
  //logoUrl?: string;

  @IsOptional()
  @Type(() => ImageFileDto)
  logoImage: ImageFileDto

  @IsOptional()
  @Type(() => ContactDto)
  contactPerson: ContactDto
}
