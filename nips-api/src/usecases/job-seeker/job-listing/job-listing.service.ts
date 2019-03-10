import { Injectable } from '@nestjs/common';

import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Vacancy } from 'entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobListingService extends RepositoryService<Vacancy> {
  constructor(@InjectRepository(Vacancy) repo) {
    super(repo);
  }
}
