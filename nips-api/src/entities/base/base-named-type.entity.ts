import { IBaseNamedTypeEntity } from '../../models/interfaces';
import { BaseNamedEntity, StatusType } from '..';
import { Column } from 'typeorm';
import { IsNotEmpty, MaxLength } from 'class-validator';

export abstract class BaseNamedTypeEntity extends BaseNamedEntity
  implements IBaseNamedTypeEntity {
  @Column({ length: 20, unique: true })
  @IsNotEmpty()
  @MaxLength(20)
  code: string = undefined;

  /*  constructor(public cd: string, public nm: string) {
    super(nm);
    this.code = cd;
  } */
}
