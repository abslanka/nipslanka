import { Injectable } from '@nestjs/common';
import { RepositoryService } from '@nestjsx/crud/typeorm';

import { Company, Contact } from 'entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService extends RepositoryService<Company> {
  constructor(@InjectRepository(Company) repo) {
    super(repo);
  }
}
