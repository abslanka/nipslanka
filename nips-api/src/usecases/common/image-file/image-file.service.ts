import { Injectable } from '@nestjs/common';
import { ImageFile } from 'entities';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImageFileService extends RepositoryService<ImageFile> {
  constructor(@InjectRepository(ImageFile) repo) {
    super(repo);
  }
}
