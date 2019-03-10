/* import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { IJobVacancy } from '../../models/interfaces';
import { BaseEntity } from '../base/base.entity';
import { JobOrder, Company, JobOrderVacancy } from '..';
import { Type } from 'class-transformer';

@Entity({ name: 'job_vacancy' })
export class JobVacancy extends BaseEntity implements IJobVacancy {
  @Column()
  position: string;

  @Column({ nullable: true })
  description: string = undefined;

  @Column({ nullable: true })
  type: string = undefined; // full/part time

  @Column({ nullable: true })
  location: string = undefined;

  @Column({ nullable: true })
  skills?: string = undefined;

  @Column({ nullable: true })
  experience?: string = undefined;

  @Column({ nullable: true })
  qualifications?: string = undefined;

  @Column({ nullable: true })
  education?: string = undefined;

  // consider this for many-to-many vacancies for orders
  //@OneToMany(type => JobOrder, jobOrder => jobOrder.vacancy)
  //jobOrders?: JobOrder[];
  //   @ManyToMany(type => JobOrder, jobOrder => jobOrder.vacancies)
  // jobOrders: JobOrder[];

  //   @Type(() => JobOrderVacancy)
  // @OneToMany(
  //   type => JobOrderVacancy,
  //   jobOrderVacancy => jobOrderVacancy.vacancy,
  // )
  // jobOrderVacancies: JobOrderVacancy[];

  @ManyToOne(type => Company, { eager: true, nullable: true })
  @JoinColumn({ name: 'company_id' }) // todo: remove name as its not required now due to custom naming strategy enabled
  company: Company;
}
 */
