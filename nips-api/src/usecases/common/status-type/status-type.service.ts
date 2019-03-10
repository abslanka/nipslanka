import { Injectable } from '@nestjs/common';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { StatusType } from 'entities';

@Injectable()
export class StatusTypeService extends RepositoryService<StatusType> {
  constructor(@InjectRepository(StatusType) repo) {
    super(repo);
  }
}
