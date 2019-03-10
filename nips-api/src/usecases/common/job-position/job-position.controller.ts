import { Controller } from '@nestjs/common';
import { CrudController, Crud, RestfulOptions } from '@nestjsx/crud';

import { JobPositionService } from './job-position.service';
import { JobPosition } from 'entities';
import { JobPositionDto } from 'models/dto';

@Crud(JobPositionDto)
@Controller('/job-position')
export class JobPositionController
  implements CrudController<JobPositionService, JobPosition> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      //users: {},
    },
    sort: [{ field: 'name', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: JobPositionService) {}
}
