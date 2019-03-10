import { JobOrder, BaseEntity, StatusType } from '.';
import { IVacancy } from './../models/interfaces';
import { ManyToOne, JoinColumn, Entity, Column } from 'typeorm';
import { Type } from 'class-transformer';
import { JobPosition } from './job-position.entity';

@Entity({ name: 'vacancy' })
export class Vacancy extends BaseEntity implements IVacancy {
  @Column()
  noOfOpenings: number;

  /*  @Column({ nullable: true })
  status?: number = 0; */
  @Type(() => StatusType)
  @ManyToOne(() => StatusType, { eager: true, nullable: true })
  @JoinColumn({ name: 'status_type_code', referencedColumnName: 'code' }) // todo: remove name attrib
  status?: StatusType = undefined; // <!-- n-New, h-Halt, c-Cancel, p-pending, pf-part-filled, f-filled , r-Reject -->

  @Column({ nullable: true })
  jobsOffered?: number = 0;

  @Column({ nullable: true })
  jobsAvailable?: number = 0;

  @Column()
  salary: number;

  @Column({ nullable: true })
  benefits?: string = undefined;

  @Column({ nullable: true })
  location?: string = undefined;

  @Type(() => JobOrder)
  @ManyToOne(() => JobOrder, {}) // inverse "jobOrderVacancies: JobOrderVacancy[]" is one-to-many in JobOrder
  @JoinColumn({ name: 'job_order_id' })
  jobOrder: JobOrder;

  @Type(() => JobPosition)
  @ManyToOne(() => JobPosition, { eager: true, cascade: true }) // inverse "jobOrderVacancies: JobOrderVacancy[]" is one-to-many in JobVacancy
  //@JoinColumn({ name: 'job_position_name', referencedColumnName: 'name' })
  @JoinColumn({ name: 'job_position_id' })
  jobPosition: JobPosition;
}
