import { IJobOrder, IJobOrderVacancy } from "../interfaces"
import { IsOptional } from "class-validator"
import { Type } from "class-transformer"

import { JobProviderDto, JobVacancyDto, CompanyDto, JobOrderDto } from "."

export class JobOrderVacancyDto implements IJobOrderVacancy {
  @IsOptional()
  id: number

  jobOrder?: JobOrderDto

  vacancy?: JobVacancyDto
  @IsOptional()
  noOfOpenings: number

  status?: number
  jobsOffered?: number
  jobsAvailable?: number
  @IsOptional()
  salary: number

  @IsOptional()
  bonus?: number

  @IsOptional()
  benefits?: string

  /* 
  @IsOptional()
  @Type(() => JobProviderDto)
  jobProvider: JobProviderDto;

  @IsOptional()
  @Type(() => CompanyDto)
  company: CompanyDto;

  @IsOptional()
  @Type(() => JobVancyDto)
  vacancies: JobVancyDto[]; */
}
