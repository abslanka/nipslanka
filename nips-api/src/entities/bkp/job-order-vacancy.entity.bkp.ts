/* import { BaseNamedEntity, JobProvider, JobVacancy, JobOrder } from '..';
import {
  //ICompany,
  //IJobOrderVacancy,
  IJobOrder,
  IJobVacancy,
} from '../../models/interfaces';
import {
  ManyToOne,
  JoinColumn,
  OneToMany,
  Entity,
  PrimaryColumn,
  Column,
} from 'typeorm';
import { Type } from 'class-transformer';

@Entity({ name: 'job_order_vacancy' })
export class JobOrderVacancy {
  // implements IJobOrderVacancy {
  @PrimaryColumn()
  jobOrderId: number;

  @PrimaryColumn()
  jobVacancyId: number;

  @Column()
  noOfOpenings: number;
  @Column()
  status?: number = 0;
  @Column()
  jobsOffered?: number = 0;
  @Column()
  jobsAvailable?: number;

  @Column()
  salary: number;
  @Column({ nullable: true })
  bonus?: number;
  @Column({ nullable: true })
  benefits?: string;

  @Type(() => JobOrder)
  @ManyToOne(() => JobOrder, { eager: true }) // inverse "jobOrderVacancies: JobOrderVacancy[]" is one-to-many in JobOrder
  @JoinColumn({ name: 'job_order_id' })
  jobOrder: JobOrder;

  @Type(() => JobVacancy)
  @ManyToOne(() => JobVacancy, { eager: true }) // inverse "jobOrderVacancies: JobOrderVacancy[]" is one-to-many in JobVacancy
  @JoinColumn({ name: 'job_vacancy_id' })
  vacancy: JobVacancy;
}
 */
