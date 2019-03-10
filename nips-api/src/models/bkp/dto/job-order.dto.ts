import { IJobOrder } from '../interfaces';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { JobProviderDto, JobVancyDto, CompanyDto } from '.';
import { JobOrderVacancyDto } from './job-order-vacancy.dto';

export class JobOrderDto implements IJobOrder {
  @IsOptional()
  id: number;

  @IsOptional()
  noOfOpenings: number;

  @IsOptional()
  closingDate: Date;

  @IsOptional()
  status?: number;

  @IsOptional()
  @Type(() => JobProviderDto)
  jobProvider: JobProviderDto;

  @IsOptional()
  @Type(() => CompanyDto)
  company: CompanyDto;

  @IsOptional()
  @Type(() => JobOrderVacancyDto)
  vacancies: JobOrderVacancyDto[];
}
