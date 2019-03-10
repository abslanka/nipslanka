import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IBaseEntity } from '../../models/interfaces';
import * as moment from 'moment';

export abstract class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date = moment()
    .utc()
    .toDate(); // undefined;
}
