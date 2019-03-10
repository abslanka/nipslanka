import { IVacancy } from '../interfaces';

import { JobOrderDto, JobPositionDto } from '.';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { StatusTypeDto } from './status.dto';

export class VacancyDto implements IVacancy {
  @IsOptional()
  id: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  noOfOpenings: number;

  @IsOptional()
  @Type(() => StatusTypeDto)
  status?: StatusTypeDto;

  @IsOptional()
  jobsOffered?: number;

  @IsOptional()
  jobsAvailable?: number;

  @IsOptional()
  salary: number;

  @IsOptional()
  benefits?: string;

  @IsOptional()
  location?: string;

  @IsOptional()
  @Type(() => JobOrderDto)
  jobOrder?: JobOrderDto;

  @IsOptional()
  @Type(() => JobPositionDto)
  jobPosition?: JobPositionDto;
}
