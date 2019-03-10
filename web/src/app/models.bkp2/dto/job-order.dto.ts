import { IJobOrder } from "../interfaces"
import { IsOptional } from "class-validator"
import { Type } from "class-transformer"
import { StatusTypeDto } from "./status.dto"
import { CompanyDto } from "./company.dto"
import { VacancyDto } from "./vacancy.dto"

//import { CompanyDto, VacancyDto, StatusTypeDto } from '.';

export class JobOrderDto implements IJobOrder {
  @IsOptional()
  id: number

  @IsOptional()
  noOfOpenings: number

  @IsOptional()
  closingDate: Date

  @IsOptional()
  @Type(() => StatusTypeDto)
  status?: StatusTypeDto

  @IsOptional()
  @Type(() => CompanyDto)
  company: CompanyDto

  @IsOptional()
  @Type(() => VacancyDto)
  vacancies: VacancyDto[]
}
