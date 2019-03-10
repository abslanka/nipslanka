import { BaseEntity, Company } from './';
//import { IJobOrder } from './interfaces/i-job-order';
import { IJobOrder } from './../models/interfaces';
import { Column, ManyToOne, JoinColumn, Entity, OneToMany } from 'typeorm';
import { Type } from 'class-transformer';
import { Vacancy } from './vacancy.entity';
import { StatusType } from './status.entity';

@Entity({ name: 'job_order' })
export class JobOrder extends BaseEntity implements IJobOrder {
  @Column({ type: Date, name: 'closing_dt', nullable: true })
  closingDate: Date = undefined;

  @Column({ nullable: true })
  standardEmploymentContract?: string; // e.g. provision of housing accommodation, food, Residence permit( optional), overtime/holiday/rest day rate/payment

  // order status - pending, publised, part-filled, filled
  // job offers - vacancy wise no of jobs offered from this order ( move to job-order-vacancy table ? or a job-offers table?)

  /*   @Type(() => JobProvider)
  @ManyToOne(type => JobProvider, { eager: true, nullable: true })
  @JoinColumn({ name: 'job_provider_id' })
  jobProvider: JobProvider; */

  @Type(() => StatusType)
  @ManyToOne(() => StatusType, { eager: true, nullable: true })
  @JoinColumn({ name: 'status_type_code', referencedColumnName: 'code' }) // todo: remove name attrib
  status?: StatusType = undefined; // <!-- n-New, h-Halt, c-Cancel, p-pending, pf-part-filled, f-filled , r-Reject -->

  @Type(() => Company)
  @ManyToOne(() => Company, { eager: true, nullable: true })
  @JoinColumn({ name: 'company_id' }) // todo: remove name as its not required now due to custom naming strategy enabled
  company: Company;

  @Type(() => Vacancy)
  @OneToMany(() => Vacancy, vacancy => vacancy.jobOrder, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  vacancies?: Vacancy[];
}
