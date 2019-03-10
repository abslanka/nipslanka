import { Controller } from '@nestjs/common';
import { StatusType } from 'entities';
import { CrudController, Crud, RestfulOptions } from '@nestjsx/crud';
import { StatusTypeDto } from 'models/dto/status.dto';
import { StatusTypeService } from './status-type.service';

@Crud(StatusTypeDto)
@Controller('/status-type')
export class StatusTypeController
  implements CrudController<StatusTypeService, StatusType> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      //users: {},
    },
    sort: [{ field: 'name', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: StatusTypeService) {}
}
