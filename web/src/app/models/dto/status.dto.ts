import { IStatusType } from '../interfaces';
import { IsOptional } from 'class-validator';

export class StatusTypeDto implements IStatusType {
  @IsOptional()
  id: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  code: string;

  @IsOptional()
  name: string;

  //constructor(public name: string, public code: string) {}
}
