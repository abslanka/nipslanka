import { IImageFile } from '../interfaces';
import { IsOptional } from 'class-validator';

export class ImageFileDto implements IImageFile {
  @IsOptional()
  id: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  name: string;

  @IsOptional()
  url?: string;
}
