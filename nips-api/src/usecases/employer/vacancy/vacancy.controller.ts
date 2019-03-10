import { Controller } from '@nestjs/common';
import { CrudController, RestfulOptions, Crud } from '@nestjsx/crud';
import { Vacancy } from 'entities';
import { VacancyService } from './vacancy.service';
import { VacancyDto } from 'models/dto';

@Crud(VacancyDto)
@Controller('/employer/vacancy')
export class VacancyController
  implements CrudController<VacancyService, Vacancy> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      //jobOrder: {},
      //jobPosition: {},
    },
    sort: [{ field: 'location', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: VacancyService) {
    //super(service);
  }
}
