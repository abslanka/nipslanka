/* import { BaseNamedEntity, Company, JobOrder } from '..';
import { IJobProvider } from '../../models/interfaces';
import { OneToMany, Column, Entity } from 'typeorm';
import { Type } from 'class-transformer';

@Entity({ name: 'job_provider' })
export class JobProvider extends BaseNamedEntity implements IJobProvider {
  @Column()
  providerType: string = 'employer';

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  address?: string;

  @Type(() => Company)
  @OneToMany(type => Company, company => company.jobProvider)
  company?: Company[];

  @Type(() => JobOrder)
  @OneToMany(type => JobOrder, jobOrder => jobOrder.jobProvider)
  jobOrders?: JobOrder[];

  //@OneToMany(type => Contact,)
  //contact: Contact[];
}
 */
