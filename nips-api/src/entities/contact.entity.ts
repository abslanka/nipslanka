import { BaseNamedEntity } from '.';

import { Column, Entity } from 'typeorm';
import { IContact } from 'models/interfaces';

@Entity({ name: 'contact' })
export class Contact extends BaseNamedEntity implements IContact {
  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;
}
