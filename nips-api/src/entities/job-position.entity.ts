import { Column, Entity, OneToMany } from 'typeorm';
import { IJobPosition } from '../models/interfaces';
import { BaseNamedTypeEntity } from '.';
import { Type } from 'class-transformer';
import { Vacancy } from './vacancy.entity';

@Entity({ name: 'job_position' })
export class JobPosition extends BaseNamedTypeEntity implements IJobPosition {
  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  skills?: string;

  @Column({ nullable: true })
  experience?: string;

  @Column({ nullable: true })
  qualifications?: string;

  @Type(() => Vacancy)
  @OneToMany(() => Vacancy, vacancy => vacancy.jobPosition)
  vacancies?: Vacancy[];
}
