import { Module } from '@nestjs/common';
import { JobOrderController } from './job-order/job-order.controller';
import { JobOrderService } from './job-order/job-order.service';
import { entities, JobOrder } from 'entities';
import { DbModule } from 'adapters/db/db.module';
import { CompanyService } from './company/company.service';
import { CompanyController } from './company/company.controller';
import { CommonModule } from 'usecases/common/common.module';
//import { VacancyModule } from './vacancy/vacancy.module';
import { VacancyService } from './vacancy/vacancy.service';
import { VacancyController } from './vacancy/vacancy.controller';

@Module({
  imports: [DbModule.forEntity([...entities]), CommonModule], // [JobOrder]  , CommonModule , VacancyModule
  controllers: [JobOrderController, CompanyController, VacancyController],
  providers: [JobOrderService, CompanyService, VacancyService],
  exports: [JobOrderService, CompanyService, VacancyService],
})
export class EmployerModule {}
