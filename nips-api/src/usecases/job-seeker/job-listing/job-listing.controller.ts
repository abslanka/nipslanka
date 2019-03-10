import { Controller, Param, Query, Logger } from '@nestjs/common';
import {
  CrudController,
  RestfulOptions,
  Crud,
  Override,
  RestfulParamsDto,
} from '@nestjsx/crud';
import { Vacancy } from 'entities';
import { VacancyDto } from 'models/dto';
import { JobListingService } from './job-listing.service';
//import { JobOrderService } from 'usecases/employer/job-order/job-order.service';

@Crud(VacancyDto)
@Controller('/job-seeker/job-listing')
export class JobListingController
  implements CrudController<JobListingService, Vacancy> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      jobOrder: {},
      jobPosition: {},
    },
    sort: [{ field: 'location', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(
    public service: JobListingService /* , public jobOrderService: JobOrderService */,
  ) {}

  get base(): CrudController<JobListingService, Vacancy> {
    return this;
  }

  @Override()
  getMany(@Param() params, @Query() query: RestfulParamsDto) {
    Logger.log(' job listing from overriden rest method ');
    // do some stuff
    return this.base.getManyBase(params, query);
  }
}
