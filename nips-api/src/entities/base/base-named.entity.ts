import { Column } from 'typeorm';
import { IBaseNamedEntity } from '../../models/interfaces';
import { BaseEntity } from '..';
import { IsNotEmpty, MaxLength } from 'class-validator';

export abstract class BaseNamedEntity extends BaseEntity
  implements IBaseNamedEntity {
  @Column({ length: 100, unique: true })
  @IsNotEmpty()
  @MaxLength(100)
  name: string = undefined;

/*   constructor(public nm: string) {
    super();
    this.name = nm;
  } */
}
