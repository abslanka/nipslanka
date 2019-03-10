import { Injectable } from '@nestjs/common';
import { JobOrderDto } from '../../../models/dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { JobOrder, Company, Contact, JobPosition, Vacancy } from 'entities';

import { plainToClass } from 'class-transformer';
import { ContactService } from 'usecases/common/contact/contact.service';
import { CompanyService } from '../company/company.service';

import { RepositoryService } from '@nestjsx/crud/typeorm';

@Injectable()
export class JobOrderService extends RepositoryService<JobOrder> {
  constructor(@InjectRepository(JobOrder) repo) {
    super(repo);
  }
}

/* 
@Injectable()
export class JobOrderService {
  constructor(
    private readonly contactService: ContactService,
    private readonly companyService: CompanyService,
    @InjectRepository(JobPosition)
    protected readonly jobPositionRepository: Repository<JobPosition>,
    @InjectRepository(Vacancy)
    protected readonly vacancyRepository: Repository<Vacancy>,
    @InjectRepository(JobOrder)
    protected readonly orderRepository: Repository<JobOrder>,
  ) {}

  async createOrder(jo: JobOrder) {
    let contact: Contact = plainToClass(Contact, jo.company.contactPerson);

    try {
      //contact = await this.contactService.findOrCreate(contact);
      contact = await this.contactService.getOne(contact.id);
    } catch (error) {
      // contact find or save error
      //console.log('contact find or save error', error.message, error.detail);
      throw {
        message: 'contact find or save error > ' + error.message,
        detail: error.detail,
      };
      //   return {
      //   message: 'contact find or save error > ' + error.message,
      //   detail: error.detail,
      // }; 
    }

    let company = plainToClass(Company, jo.company);
    try {
      company = await this.companyService.getOne(company.id);
    } catch (error) {
      // company find  error
      console.log('company find error', error.message, error.detail);
      //   return {
      //   message: 'company find error > ' + error.message,
      //   detail: error.detail,
      // }; 

      throw {
        message: 'company find error > ' + error.message,
        detail: error.detail,
      };
    }

    ///let vacancy = plainToClass(JobVacancy, jo.vacancies);
    ///delete jo.vacancies;
    delete jo.company;

    console.log('before create job order ...', jo);

    let jord = plainToClass(JobOrder, jo);
    try {
      jord.company = company; // await this.companyRepository.save(company);
      //jord.company.contactPerson = await this.contactRepository.save(contact); //.then(v=> v);
      ///jord.vacancies = await this.vacancyRepository.save(vacancy);

      return this.orderRepository.save(jord);
    } catch (error) {
      console.log('job order save error ', error.message, error.detail);
      //       return {
      //   message: error.message,
      //   detail: error.detail,
      // };
      throw {
        message: 'job order save error > ' + error.message,
        detail: error.detail,
      };
      //throw error;
    }
  }
}
 */
