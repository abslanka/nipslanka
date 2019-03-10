import { IContact } from '../interfaces';
import { IsOptional, IsEmail } from 'class-validator';

export class ContactDto implements IContact {
  @IsOptional()
  id: number;

  @IsOptional()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  phone?: string;
}
