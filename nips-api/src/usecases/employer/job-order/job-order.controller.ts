import { Controller, UseInterceptors } from '@nestjs/common';

//import { ResponseInterceptor, ErrorsInterceptor } from 'interceptors';
import { CrudController, RestfulOptions, Crud } from '@nestjsx/crud';

import { JobOrderService } from './job-order.service';
import { JobOrderDto } from '../../../models/dto';
import { JobOrder } from '../../../entities';

@Crud(JobOrderDto)
@Controller('/employer/job-order')
//@UseInterceptors(ResponseInterceptor, ErrorsInterceptor)
export class JobOrderController
  implements CrudController<JobOrderService, JobOrder> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      company: {},
    },
    sort: [{ field: 'id', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: JobOrderService) {
    //super(service);
  }
}

/* export class JobOrderController {
  constructor(private readonly service: JobOrderService) {}

  @Get()
  findAll(@Query() query) {
    return `This action returns all cats (search: ${query.search} items)`;
  }

  @Post()
  async createOrder(@Body() jobOrderDto: JobOrderDto) {
    Logger.log(plainToClass(JobOrder, jobOrderDto), 'createJobOrder');
    let jobOrder: any;
    //let res: RestResponse<JobOrderDto>;
    try {
      jobOrder = await this.service.createOrder(
        plainToClass(JobOrder, jobOrderDto),
      );
      //res = new RestResponse<JobOrderDto>(classToClass(jobOrder)
    } catch (error) {}

    return classToClassFromExist(JobOrderDto, jobOrder);
  }
} */

/* @Controller('/job-provider/job-order')
export class JobOrderController {
  constructor(private readonly service: JobOrderService) {}

  @Post()
  async create(@Req() req, @Body() dto: JobOrderDto): Promise<JobOrderDto> {
    try {
      return await this.service.create(
        {
          item: plainToClass(JobOrderDto, dto),
        },
        req.user,
      );

      //  return plainToClass(
      //   JobOrder,
      //   await this.service.create(
      //     {
      //       item: plainToClass(JobOrder, dto),
      //     },
      //     req.user,
      //   ),
      // );
    } catch (error) {
      throw error;
    }
  }
} */
