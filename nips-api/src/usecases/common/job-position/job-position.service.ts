import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { JobPosition } from 'entities';

@Injectable()
export class JobPositionService extends RepositoryService<JobPosition> {
  constructor(@InjectRepository(JobPosition) repo) {
    super(repo);
  }
}
