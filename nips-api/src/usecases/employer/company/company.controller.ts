import { Controller } from '@nestjs/common';
import { CrudController, RestfulOptions, Crud } from '@nestjsx/crud';
import { Company } from 'entities';
import { CompanyService } from './company.service';
import { CompanyDto } from 'models/dto';

@Crud(CompanyDto)
@Controller('/employer/company')
export class CompanyController
  implements CrudController<CompanyService, Company> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      contactPerson: {},
    },
    sort: [{ field: 'name', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: CompanyService) {
    //super(service);
  }
}
