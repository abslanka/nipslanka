import { Column } from 'typeorm';
import { MaxLength } from 'class-validator';

import { IContact } from '../../models/interfaces';
import { BaseNamedEntity } from '../';

export class Contact extends BaseNamedEntity implements IContact {
  @Column({ length: 50 })
  @MaxLength(50)
  email: string;

  @Column({ length: 50 })
  @MaxLength(50)
  phone?: string;

  @Column({ name: 'website_url', length: 255 })
  @MaxLength(255)
  websiteUrl?: string;

  /*   // A Contact has relation with ContactAddress, however inverse relation is not set (ContactAddress does not have relation with Contact set)
  @OneToOne(() => ContactAddress, {
    cascade: true,
  })
  @JoinColumn({ name: 'address_id' })
  address?: ContactAddress; */
  @Column({ name: 'address', length: 500 })
  @MaxLength(500)
  address?: string;

  //@ManyToOne(type => JobProvider, jobProvider => jobProvider.contact)
  //jobProvider: JobProvider;
}
