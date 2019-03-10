import { IJobOrder } from '../interfaces';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { CompanyDto, VacancyDto, StatusTypeDto } from '.';

export class JobOrderDto implements IJobOrder {
  @IsOptional()
  id: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  noOfOpenings: number;

  @IsOptional()
  closingDate: Date;

  @IsOptional()
  @Type(() => StatusTypeDto)
  status?: StatusTypeDto;

  @IsOptional()
  @Type(() => CompanyDto)
  company: CompanyDto;

  @IsOptional()
  @Type(() => VacancyDto)
  vacancies: VacancyDto[];
}
